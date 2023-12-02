# Generated by Django 4.2.7 on 2023-12-02 06:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("sell", "0013_alter_propertyinfo_images_delete_propertyimage"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="propertyinfo",
            name="images",
        ),
        migrations.CreateModel(
            name="PropertyImage",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="property_images/")),
                (
                    "property_info",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="images",
                        to="sell.propertyinfo",
                    ),
                ),
            ],
        ),
    ]
