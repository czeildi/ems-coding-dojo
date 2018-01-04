class BlockAllocation:
    
    def __init__(self, banks):
        self.banks = banks

    def cycle_detection_steps(self):
        if (len(self.banks) == 0):
            return 0
        seen_distributions = [self.banks]
        steps = 0
        ciklus_valtozo = self.banks[:]
        while True:
            ciklus_valtozo = memory_distribution_step(ciklus_valtozo[:])
            steps = steps + 1
            if ciklus_valtozo in seen_distributions:
                break
            seen_distributions = seen_distributions + [ciklus_valtozo]
        return steps

def memory_distribution_step(banks):
    if len(banks) == 0:
        return banks
    
    max_value = max(banks)
    max_idx = banks.index(max_value)
    banks[max_idx] = 0
    
    return bump_on_section_circularly(banks, 1 + max_idx, max_value)

def bump_on_section_circularly(subject, section_start, section_length):
    for i in range(section_start, section_start + section_length):
        subject[i % len(subject)] = subject[i % len(subject)] + 1
    return subject