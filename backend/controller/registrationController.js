import Registration from '../models/Registration';
import sendEmail from '../utils/sendEmail';


exports.registerUser = async (req, res) => {
    try {
        const { name, email, admissionNo, phone, purpose } = req.body;

        
        const registration = await Registration.create({
            name,
            email,
            admissionNo,
            phone,
            purpose,
        });

    
        const subject = 'Registration Confirmation - University Connect';
        const message = `
            <h1>Thank You for Registering, ${name}!</h1>
            <p>We have successfully received your registration for University Connect. Here is a summary of the details you provided:</p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Admission No:</strong> ${admissionNo}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Purpose of Registering:</strong> ${purpose}</li>
            </ul>
            <p>Our admissions team will review your submission and contact you with the next steps.</p>
            <br>
            <p>Best regards,</p>
            <p><strong>The University Connect Team</strong></p>
        `;

        
        await sendEmail({
            to: email,
            subject: subject,
            html: message,
        });

        res.status(201).json({ success: true, message: "Registration successful!", data: registration });

    } catch (error) {
        console.error('Registration Error:', error);
        
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'This email address has already been registered.' });
        }
        res.status(500).json({ success: false, message: 'Server Error: We could not process your registration at this time.' });
    }
};
