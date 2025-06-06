# Generated by Django 5.1.3 on 2025-05-10 23:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0005_author_book_authors'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('website', models.URLField()),
                ('biography', models.TextField(max_length=500)),
                ('author', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='first_app.author')),
            ],
        ),
    ]
