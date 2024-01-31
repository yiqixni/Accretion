def create_message(file_dict):
    sender = os.environ['MailSender']
    recipient = os.environ['MailRecipient']

    separator = ";"

    # Parse the email body.
    mailobject = email.message_from_string(file_dict['file'].decode('utf-8'))

    # Create a new subject line.
    subject_original = mailobject['Subject']
    subject = "FW: " + subject_original

    # The body text of the email.
    body_text = ("The original message was received from "
                 + separator.join(mailobject.get_all('From'))
                 + ".\n\n" + mailobject.get_payload())

    # Create a MIME container.
    msg = MIMEMultipart()
    # Create a MIME text part.
    text_part = MIMEText(body_text, _subtype="plain")
    # Attach the text part to the MIME message.
    msg.attach(text_part)

    # Add subject, from, and to lines.
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = recipient

    message = {
        "Source": sender,
        "Destinations": recipient,
        "Data": msg.as_string()
    }

    return message
