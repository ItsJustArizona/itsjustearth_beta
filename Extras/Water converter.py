##Water use converter for It's Just Earth
##All use of this code is available to use to anyone without making a profit
##This code MAY NOT be used for profit in any circumstances unless otherwise negotiated with by the ORIGINAL CREATOR
##If used in a published manner, please credit the original creator at the bottom of the page, Thank you!

print ("All numbers should be assumed by a SINGULAR PLANT basis")
r1 = int(float(input("Number of days of water cycle for GROW season: ")))
r2 = int(float(input("Number of days of water cycle for HARVEST season: ")))
x1 = int(float(input("Amount of water in INCHES for GROW season per water cycle: ")))
x2 = int(float(input("Amount of water in INCHES for HARVEST season per water cycle: ")))
y = int(float(input("Size of crop in Square Feet (Length by Width): ")))
t1 = int(float(input("GROW season time (in days): ")))
t2 = int(float(input("HARVEST season time (in days): ")))
z = int(float(input("Average amount of crop per plant: ")))

#Convert Feet to inches

yy = y/12

#Convert Grow season to just days
xr1 = x1/r1
xr2 = x2/r2

#Get full square inches and combine with time

x1yy = xr1 * yy * t1
x2yy = xr2 * yy * t2

xyy = x1yy + x2yy

#Get water needs in Liters

xx = xyy * 61.024

#Get amount of water in L per individual item

l = xx/z

print (l,"L/item")

n = 1

while n == 1:
    inpt = input ("Would you like to figure out another item (y or n): ")
    if inpt == "y":
        r1 = int(float(input("Number of days of water cycle for GROW season: ")))
        r2 = int(float(input("Number of days of water cycle for HARVEST season: ")))
        x1 = int(float(input("Amount of water in INCHES for GROW season per water cycle: ")))
        x2 = int(float(input("Amount of water in INCHES for HARVEST season per water cycle: ")))
        y = int(float(input("Size of crop in Square Feet (Length by Width): ")))
        t1 = int(float(input("GROW season time (in days): ")))
        t2 = int(float(input("HARVEST season time (in days): ")))
        z = int(float(input("Average amount of crop per plant: ")))

        #Convert Feet to inches

        yy = y/12

        #Convert Grow season to just days
        xr1 = x1/r1
        xr2 = x2/r2

        #Get full square inches and combine with time

        x1yy = xr1 * yy * t1
        x2yy = xr2 * yy * t2

        xyy = x1yy + x2yy

        #Get water needs in Liters

        xx = xyy * 61.024

        #Get amount of water in L per individual item

        l = xx/z

        print (l,"L/item")

        n = 1
    elif inpt == "n":
            n = 0
            break

##Last Edit Feb 22 2023
##Copywrite It's Just Earth 2023
##In association with Space Gnomes Co
##An Arizona Original Software

