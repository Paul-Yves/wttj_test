class Company < ApplicationRecord
  has_many :recruitments
  has_many :candidates, through: :recruitments
end
