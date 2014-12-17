class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
	has_and_belongs_to_many :games
	has_many :achievements, dependent: :destroy

	validates :username, presence: true, uniqueness: true
	validates_presence_of :first_name, :age, :avatar

	has_secure_password
end