#testing src/main/python/a6MV.py
from src.main.python.a6MV import validTime

# importing unittest module
import unittest

# unittest will test all the methods whose name ends with '_tests'


# def validTime(t):
# 	return t > 0 
# 	# and t < 2359

class UTestA6MV(unittest.TestCase):
   def test_validTime(self):
      #Arrange
      time = 100
      expected = True
      
      #Act
      output = validTime(time)

      #assert
      self.assertEqual(output,expected)      #should output 'OK'
      # self.assertFalse(output,expected)      #should output 'AssertionError'

      # assert output == expected

if __name__ == '__main__':
   unittest.main(verbosity=2)
# running the test
#python -m unittest src\unittest\python\a6MV_tests.py