# Generated by Django 3.2.6 on 2024-09-23 19:32

import blango_auth.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blango_auth', '0002_auto_20240920_1932'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', blango_auth.models.BlangoUserManager()),
            ],
        ),
    ]
