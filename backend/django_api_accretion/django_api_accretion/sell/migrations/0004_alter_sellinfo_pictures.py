# Generated by Django 4.2.7 on 2023-12-01 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("sell", "0003_alter_sellinfo_pictures"),
    ]

    operations = [
        migrations.AlterField(
            model_name="sellinfo",
            name="pictures",
            field=models.ImageField(
                default="sell_pictures/none/NoImage.jpg", upload_to="sell_pictures"
            ),
        ),
    ]
