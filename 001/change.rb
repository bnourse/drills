def changeCount(amount)
    amountInPennies = (amount * 100).to_i
    quarterCount = 0
    dimeCount = 0
    nickleCount = 0
    pennyCount = 0
    remainder = 0
    
    quarterCount = amountInPennies / 25
    remainder = amountInPennies % 25
    dimeCount = remainder / 10
    remainder = remainder % 10
    nickleCount = remainder / 5
    pennyCount = remainder % 5
    
    Hash["Quarters: " => quarterCount, "Dimes: " => dimeCount, "Nickles: " => nickleCount, "Pennies" => pennyCount]
end

testAmount1=5.00
expectedResult1 = Hash["Quarters: " => 20, "Dimes: " => 0, "Nickles: " => 0, "Pennies" => 0]
result1 = changeCount(testAmount1)
puts result1 == expectedResult1

testAmount2=10.24
expectedResult2 = Hash["Quarters: " => 40, "Dimes: " => 2, "Nickles: " => 0, "Pennies" => 4]
result2 = changeCount(testAmount2)
puts result2 == expectedResult2

testAmount3=0.99
expectedResult3 = Hash["Quarters: " => 3, "Dimes: " => 2, "Nickles: " => 0, "Pennies" => 4]
result3 = changeCount(testAmount3)
puts result3 == expectedResult3