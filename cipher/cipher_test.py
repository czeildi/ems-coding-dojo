import unittest

from cipher import Cipher


class CipherTest(unittest.TestCase):
    def test_encode_empty_string(self):
        c = Cipher('a', '')
        self.assertEqual('', c.encode(''))

    def test_should_return_same_text_if_key_is_trivial(self):
        c = Cipher('a', 'a')
        self.assertEqual('a', c.encode('a'))

    def test_shift_text_with_nontrivial_key(self):
        c = Cipher('b', 'ab')
        self.assertEqual('b', c.encode('a'))

    def test_shift_text_with_second_nontrivial_key(self):
        c = Cipher('b', 'abc')
        self.assertEqual('c', c.encode('b'))

    def test_dont_encode_chars_not_in_alphabet(self):
        c = Cipher('b', 'abc')
        self.assertEqual('d', c.encode('d'))

    def test_encode_based_on_keys_index_in_alphabet(self):
        c = Cipher('b', 'bcd')
        self.assertEqual('b', c.encode('b'))

    def test_encode_longer_text_with_trivial_key(self):
        c = Cipher('a', 'ab')
        self.assertEqual('ab', c.encode('ab'))

    def test_encode_longer_text_with_same_length_key(self):
        c = Cipher('ab', 'abc')
        self.assertEqual('ac', c.encode('ab'))

    def test_encode_if_shifted_character_overflows_alphabet(self):
        c = Cipher('b', 'ab')
        self.assertEqual('a', c.encode('b'))


if __name__ == '__main__':
    unittest.main()
