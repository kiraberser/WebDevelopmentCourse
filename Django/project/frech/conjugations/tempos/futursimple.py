class FuturSimple:
    def __init__(self, verbe, sujet):
        self.verbe = verbe
        self.sujet = sujet
        self.terminaisons = ['ai', 'as', 'a', 'ons', 'ez', 'ont']
        self.sujets = ['Je', 'Tu', 'Il/Elle/On', 'Nous', 'Vous', 'Ils/Elles']
        self.irreguliers = {
            'aller': 'ir', 'avoir': 'aur', 'être': 'ser', 'faire': 'fer',
            'pouvoir': 'pourr', 'vouloir': 'voudr', 'voir': 'verr',
            'savoir': 'saur', 'devoir': 'devr', 'recevoir': 'recevr',
            'venir': 'viendr', 'tenir': 'tiendr', 'envoyer': 'enverr'
        }
        self.voyelles = 'aeiouAEIOU'

    def __str__(self):
        return f"{self.verbe} - {self.sujet}"

    def conjugue(self):
        radical = self.get_radical()
        conjugaisons = []
        for i, sujet in enumerate(self.sujets):
            if i == 0:  # Only check for "Je" -> "J'" rule
                if radical[0] in self.voyelles or (radical[0] == 'h' and radical[1] in self.voyelles):
                    sujet = "J'"
            conjugaisons.append(f"{sujet} {radical}{self.terminaisons[i]}")
        return '\n'.join(conjugaisons)

    def get_radical(self):
        if self.verbe in self.irreguliers:
            return self.irreguliers[self.verbe]
        elif self.verbe.endswith('e'):
            return self.verbe[:-1]
        elif self.verbe.endswith('re'):
            return self.verbe[:-2]
        else:
            return self.verbe


