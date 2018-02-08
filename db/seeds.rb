# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

the_watch = Company.create(name: 'Night\'s Watch')

Candidate.create(name: 'JohnSnow', email: 'you.know.nothing@yahoo.fr', companies: [the_watch])
Candidate.create(name: 'Quorin', email: 'half.hand@gmail.com', companies: [the_watch])
Candidate.create(name: 'Ygrit', email: 'kissed_by_fire_75@gmail.com')