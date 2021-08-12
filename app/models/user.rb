class User < ApplicationRecord
  validates :username,
    presence: true,
    uniqueness: { case_sensitive: false },
    length: { minimum: 4, maximum: 15 },
    format: { with: /\A[a-zA-Z0-9_-]+\z/ }
  validates :email,
    presence: true,
    uniqueness: { case_sensitive: false },
    length: { minimum: 6, maximum: 255 },
    format: { with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i }
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :orders

  has_many :reviews

  has_many :cart_items,
  foreign_key: :user_id,
  class_name: :Item

  attr_reader :password

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by(username: username_or_email) || User.find_by(email: username_or_email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
