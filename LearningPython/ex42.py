# 
# Exercise 42 http://learnpythonthehardway.org/book/ex42.html
#

## Animal is-a object (yes, sort of confusing) look at the extra credit
class Animal(object):
	pass

## Dog is-a Animal
class Dog(Animal):

	def __init__(self, name):
		## Dog has-a name
		self.name = name

## Cat is-a Animal
class Cat(Animal):
	
	def __init__(self, name):
		## Cat has-a name
		self.name = name

## Person is-a object
class Person(object):
	
	def __init__(self, name):
		## Person has a name
		self.name = name
	
		## Person has-a pet of some kind
		self.pet = None

## Employee is-a Person
class Employee(Person):
	
	def __init__(self, name, salary):
		## ?? hmm what is this strange magic?
		super(Employee, self).__init__(name)
		## Employee has-a salary
		self.salary = salary

## Fish is-a object
class Fish(object):
	pass

## Salmon is-a Fish
class Salmon(Fish):
	pass

## Halibut is-a Fish
class Halibut(Fish):
	pass

## rover is-a Dog
rover = Dog("Rover")

## satan is-a Cat
satan = Cat("Satan")

## Mary is-a Person
mary = Person("Mary")

## Mary has-a pet attribute which is set to satan (satan is Mary's pet)
mary.pet = satan

## Frank is-a Employee and has-a name attribute of "Frank" and has-a salary attribute of 120000
frank = Employee("Frank", 120000)

## Frank has-a pet attribute which is set to rover (rover is Frank's pet)
frank.pet = rover

## flipper is-a Fish (Fish has no attributes)
flipper = Fish()

## crouse is-a Salmon (Salmon has no attributes, but shares Fish attributes, which are undefined)
crouse = Salmon()

## harry is-a Halibut (Halibut has no attributes, but shares Fish attributes, which are undefined)
harry = Halibut()

print mary.name