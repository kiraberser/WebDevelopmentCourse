class PasseCompose:
    def __init__(self, verbe, sujet):
        self.verbe = verbe
        self.sujet = sujet
        self.auxiliaires = {
            'être': ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
            'avoir': ['ai', 'as', 'a', 'avons', 'avez', 'ont']
        }
        self.sujets = ['Je', 'Tu', 'Il/Elle/On', 'Nous', 'Vous', 'Ils/Elles']
        self.verbes_etre = ['aller', 'arriver', 'descendre', 'entrer', 'monter', 'mourir', 'naître', 'partir', 'rester', 'retourner', 'sortir', 'tomber', 'venir', 'devenir', 'revenir', 'parvenir']

    def __str__(self):
        return f"{self.verbe} - {self.sujet}"

    def conjugue(self):
        if self.sujet == "je" and self.verbe[-1] in ["a", "e", "i", "o", "u", "y"]:
                self.sujet = "j'"
        auxiliaire = 'être' if self.verbe in self.verbes_etre else 'avoir'
        participe = self.participe_passe()
        
        conjugaisons = []
        for i, sujet in enumerate(self.sujets):
            aux = self.auxiliaires[auxiliaire][i]
            accord = self.accord(i) if auxiliaire == 'être' else ''
            conjugaisons.append(f"{sujet} {aux} {participe}{accord}")
        
        return '\n'.join(conjugaisons)

    def participe_passe(self):
        if self.verbe.endswith('er'):
            return self.verbe[:-2] + 'é'
        elif self.verbe.endswith('ir'):
            return self.verbe[:-2] + 'i'
        elif self.verbe.endswith('re'):
            return self.verbe[:-2] + 'u'
        else:
            # This is a simplification. Many irregular verbs will need special handling.
            return self.verbe + ' (irrégulier)'

    def accord(self, sujet_index):
        if sujet_index == 0 or sujet_index == 1:  # Je, Tu
            return 'e'
        elif sujet_index == 3:  # Nous
            return 's'
        elif sujet_index == 5:  # Ils/Elles
            return 's'
        else:
            return ''

