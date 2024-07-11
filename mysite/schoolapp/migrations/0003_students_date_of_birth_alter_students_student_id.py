# Generated by Django 5.0.6 on 2024-07-11 03:33

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schoolapp', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='students',
            name='date_of_birth',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='students',
            name='student_id',
            field=models.UUIDField(default='<function uuid4 at 0xffffaa9ba980>', editable=False, primary_key=True, serialize=False),
        ),
    ]