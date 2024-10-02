from django.db import models
from .tempos.futursimple import FuturSimple
from .tempos.passecompose import PasseCompose
from .tempos.present import Present
from .tempos.mots import Mots

class Conjugation(models.Model):
    verb = models.CharField(max_length=100)
    tense = models.CharField(max_length=20, choices=[
        ('present', 'Present'),
        ('passecompose', 'Passé Composé'),
        ('futursimple', 'Futur Simple'),
    ])
    subject = models.CharField(max_length=20, default='Je')

    def clean(self):
        from django.core.exceptions import ValidationError
        mots = Mots()
        if not mots.existe(self.verb):
            raise ValidationError(f"'{self.verb}' is not in the list of common French verbs.")

    def conjugate(self):
        try:
            if self.tense == 'present':
                return Present(self.verb, self.subject).conjugue()
            elif self.tense == 'passecompose':
                return PasseCompose(self.verb, self.subject).conjugue()
            elif self.tense == 'futursimple':
                return FuturSimple(self.verb, self.subject).conjugue()
            else:
                return "Tense not supported"
        except Exception as e:
            return f"Error conjugating verb: {str(e)}"
        


    def __str__(self):
        return f"{self.verb} - {self.tense}"