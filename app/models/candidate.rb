class Candidate < ApplicationRecord
  has_many :recruitments
  has_many :companies, through: :recruitments
end
