# run tests from terminal with python test-dojo.py

import unittest

from dojo import BlockAllocation, memory_distribution_step

class BlockAllocationTest(unittest.TestCase):
    def test_no_bank(self):
        distributor = BlockAllocation([])
        self.assertEqual(
            distributor.cycle_detection_steps(),
            0
        )

    def test_one_bank_with_block_returns_1(self):
        distributor = BlockAllocation([3])
        self.assertEqual(
            distributor.cycle_detection_steps(),
            1
        )

    def test_example(self):
        distributor = BlockAllocation([0, 2, 7, 0])
        self.assertEqual(
            distributor.cycle_detection_steps(),
            5
        )

    def test_redistribution_of_empty_memory_is_empty(self):
        self.assertEqual(
            memory_distribution_step([]), []
        )

    def test_redistribution_one_bank_is_the_same(self):
        self.assertEqual(
            memory_distribution_step([5]), [5]
        )

    def test_redistribution_of_1_to_other(self):
        self.assertEqual(
            memory_distribution_step([1, 0]), [0, 1]
        )
        self.assertEqual(
            memory_distribution_step([1, 0, 0]), [0, 1, 0]
        )

    def test_redistribute_more_blocks_to_empty_banks(self):
        self.assertEqual(
            memory_distribution_step([2, 0, 0, 0]),
            [0, 1, 1, 0]
        )
    
    def test_redistribute_increase_by_one(self):
        self.assertEqual(
            memory_distribution_step([2, 1, 1, 1]),
            [0, 2, 2, 1]
        )
    
    def test_redistribute_increase_by_one_overflow(self):
        self.assertEqual(
            memory_distribution_step([5, 1, 1, 1]),
            [1, 3, 2, 2]
        )

    def test_redistribute_start_on_arbitraty_position(self):
        self.assertEqual(
            memory_distribution_step([0, 1, 0]),
            [0, 0, 1]
        )

    def test_2_element_cycle(self):
        distributor = BlockAllocation([1, 0])
        self.assertEqual(distributor.cycle_detection_steps(), 2)
    


if __name__ == '__main__':
    unittest.main()
