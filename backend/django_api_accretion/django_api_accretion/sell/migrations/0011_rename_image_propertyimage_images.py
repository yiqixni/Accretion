# Generated by Django 4.2.7 on 2023-12-02 05:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("sell", "0010_remove_propertyimage_order"),
    ]

    operations = [
        migrations.RenameField(
            model_name="propertyimage",
            old_name="image",
            new_name="images",
        ),
    ]