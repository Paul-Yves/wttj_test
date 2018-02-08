class CreateRecruitments < ActiveRecord::Migration[5.1]
  def change
    create_table :recruitments do |t|
      t.references :company, foreign_key: true
      t.references :candidate, foreign_key: true
      t.integer :step, default: 0, null: false

      t.timestamps
    end
  end
end
