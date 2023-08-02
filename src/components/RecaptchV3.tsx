/* eslint-disable react-hooks/exhaustive-deps */
import { FC, FormEvent, useEffect } from 'react';

const RecaptchaV3: FC = (): JSX.Element => {
    useEffect(() => {
        const loadReCaptcha = () => {
            // @ts-ignore
            window.grecaptcha.ready(() => {
                console.log('reCAPTCHA is ready');
                renderRecaptchaWidget();
            });
        };

        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LeHXjYnAAAAAC6xHTwIVJf4N_lPM_DX9GCu6daF';
        script.async = true;
        script.defer = true;
        script.onload = loadReCaptcha;
        document.body.appendChild(script);
    }, []);

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    const handleRecaptchaToken = (token: string) => {
        console.log('reCAPTCHA token:', token);
    };

    const renderRecaptchaWidget = () => {
        // @ts-ignore
        window.grecaptcha.execute('6LeHXjYnAAAAAC6xHTwIVJf4N_lPM_DX9GCu6daF', { action: 'submit' })
            .then(handleRecaptchaToken);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <p>This form is protected by reCAPTCHA v3.</p>
                <p>Please submit the form to proceed.</p>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
};

export default RecaptchaV3;
