# == Schema Information
#
# Table name: fruits
#
#  id          :bigint(8)        not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  fruit_type  :string           default("")
#

class Fruit < ApplicationRecord
end
