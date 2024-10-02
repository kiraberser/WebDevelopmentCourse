class Present:
    def __init__(self, verbe, sujet):
        self.verbe = verbe
        self.sujet = sujet
        self.terminaisons = {
            'ER': ['e', 'es', 'e', 'ons', 'ez', 'ent'],
            'IR': ['is', 'is', 'it', 'issons', 'issez', 'issent'],
            'RE': ['s', 's', '', 'ons', 'ez', 'ent']
        }
        self.sujets = ['Je', 'Tu', 'Il/Elle/On', 'Nous', 'Vous', 'Ils/Elles']
        self.irreguliers = {
            'être': ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
            'avoir': ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
            'aller': ['vais', 'vas', 'va', 'allons', 'allez', 'vont'],
            'faire': ['fais', 'fais', 'fait', 'faisons', 'faites', 'font']
        }

    def __str__(self):
        return f"{self.verbe} - {self.sujet}"

    def conjugue(self):
        if self.verbe in self.irreguliers:
            conjugaisons = self.irreguliers[self.verbe]
        if self.sujet == "je" and self.verbe[-1] in ["a", "e", "i", "o", "u", "y"]:
                self.sujet = "j'"
        else:
            terminaison = 'ER' if self.verbe.endswith('er') else 'IR' if self.verbe.endswith('ir') else 'RE'
            racine = self.verbe[:-2] if terminaison != 'RE' else self.verbe[:-3]
            conjugaisons = [racine + t for t in self.terminaisons[terminaison]]
            
        
        return '\n'.join([f"{sujet} {conj}" for sujet, conj in zip(self.sujets, conjugaisons)])

