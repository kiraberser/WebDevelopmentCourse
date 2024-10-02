class Mots:
    def __init__(self):
        self.verbs = [
            "être",     # ser/estar
            "avoir",    # tener/haber
            "faire",    # hacer
            "dire",     # decir
            "pouvoir",  # poder
            "aller",    # ir
            "voir",     # ver
            "vouloir",  # querer
            "venir",    # venir
            "devoir",   # deber
            "prendre",  # tomar/coger
            "donner",   # dar
            "parler",   # hablar
            "mettre",   # poner
            "savoir",   # saber
            "passer",   # pasar
            "croire",   # creer
            "aimer",    # amar/querer/gustar
            "falloir",  # tener que / hacer falta
            "demander", # pedir/preguntar
            "trouver",  # encontrar
            "rendre",   # devolver/rendir
            "comprendre", # entender/comprender
            "rester",   # quedarse
            "tenir",    # mantener/sostener
            "porter",   # llevar
            "parler",   # hablar
            "montrer",  # mostrar
            "continuer",# continuar
            "penser",   # pensar
            "suivre",   # seguir
            "connaître",# conocer
            "croire",   # creer
            "commencer",# comenzar/empezar
            "compter",  # contar
            "entendre", # escuchar/oír
            "attendre", # esperar
            "travailler",# trabajar
            "appeler",  # llamar
            "permettre",# permitir
            "vivre",    # vivir
            "écrire",   # escribir
            "répondre", # responder
            "lire",     # leer
            "sortir",   # salir
            "jouer",    # jugar/tocar
            "perdre",   # perder
            "ouvrir",   # abrir
            "apprendre",# aprender
            "finir",    # terminar/finalizar
            "choisir",  # elegir
        ]

    def existe(self, verbe):
        return verbe.lower() in (word.lower() for word in self.verbs)