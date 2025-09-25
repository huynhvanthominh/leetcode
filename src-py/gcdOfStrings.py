class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""
        l1 = len(str1)
        l2 = len(str2)
        while l2 != 0:
            temp = l2
            l2 = l1 % l2
            l1 = temp
        return str1[:l1]


print(Solution().gcdOfStrings("LEET", "CODE"))

# 3, 2 => 1 => 3 % 2
# 4, 2 => 2 => 4 % 2  = 2
# 3, 9 => 3 % 9 = 6 => 3 % 6 => 3, 3 % 3 = 0
# 6, 4 => 4 % 6  = 2 % 4 = 2 % 2 = 0
# 2, 4 => 2 % 4 = 2 => 2 % 2 = 0;
