str1 = "abc"
str2 = "xyz"


class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        def gen():
            minL: int = min(len(word1), len(word2))
            for i in range(minL):
                yield word1[i]
                yield word2[i]
            yield from word1[minL:]
            yield from word2[minL:]
        return "".join(gen())


print(Solution().mergeAlternately(str1, str2))
