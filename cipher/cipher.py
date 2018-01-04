class Cipher:
    def __init__(self, key, alphabet):
        self.key = key
        self.alphabet = alphabet

    def encode(self, text):

        encoded = ""
        for idx, original_char in enumerate(text):
            if original_char not in self.alphabet:
                encoded += original_char
                continue

            key_char = self.get_key_char(idx)
            encoded += self.alphabet[self.get_encoded_index(original_char, key_char)]

        return encoded

    def get_key_char(self, idx):
        return self.key[idx % len(self.key)]

    def get_encoded_index(self, ch, key_char):
        return (self.alphabet.index(ch) + self.alphabet.index(key_char)) % len(self.alphabet)
