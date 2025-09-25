from typing import Dict


class Solution:
    def countPoints(self, rings: str) -> int:
        value: Dict[int, Dict[str, int]] = {}
        for i in range(0, len(rings), 2):
            color = rings[i:i+1]
            rod = rings[i+1:i+2]
            if rod not in value:
                value[rod] = {}
            value[rod][color] = value[rod].get(color, 0) + 1
        count = 0
        for rod in value.keys():
            if len(value[rod].keys()) == 3:
                count += 1
        return count


print(Solution().countPoints("B0B6G0R6R0R6G9"))
