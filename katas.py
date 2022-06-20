# Python Kata Training

#1
#Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
#If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
#Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

def lovefunc( flower1, flower2 ):

    if (flower1 % 2 == 0) and (flower2 % 2 != 0):
         return True
    elif (flower1 % 2 != 0) and (flower2 % 2 == 0):
        return True
    else :
        return False
    
    
lovefunc(5, 5);

#2        
#Your task is to write a function which returns the time since midnight in milliseconds.
#Example:
#h = 0
#m = 1
#s = 1
#result = 61000  

def past(h, m, s):
    # Good Luck!
    return h * 3600000 + m * 60000 + s * 1000

past(0,1,1)