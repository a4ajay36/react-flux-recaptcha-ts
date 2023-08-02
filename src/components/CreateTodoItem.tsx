import { Box, Button, TextField } from '@mui/material';
import { FC, FormEvent, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { v4 } from 'uuid';

import { Todo, } from '../flux/todo';
import { addTodo } from '../flux/todo/actions';

type FormValue = {
    title: string
    description: string
}

const CreateTodoItem: FC = (): JSX.Element => {
    const [isReCaptchaFilled, setIsReCaptchaFilled] = useState<string | null>(null)
    const [values, setValues] = useState<FormValue>({
        title: '',
        description: ''
    })

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!isReCaptchaFilled) {
            alert('Please check the captcha')
            return
        }

        const payload: Todo = { ...values, id: v4() }
        addTodo(payload);

        setValues({ title: '', description: '' })
    }

    const onReCaptchaChange = (token: string | null): void => {
        setIsReCaptchaFilled(token)
    }


    return (
        <Box>
            <form onSubmit={onSubmit}>
                <Box display="flex" flexDirection="column" alignItems="center" >
                    <TextField
                        label="Title"
                        variant="outlined"
                        value={values.title}
                        name='title'
                        onChange={(e) => {
                            setValues({
                                ...values,
                                [e.target.name]: e.target.value
                            })
                        }}
                        style={{ marginBottom: '15px', width: 340 }}
                        required
                    />

                    <TextField
                        label="Description"
                        variant="outlined"
                        value={values.description}
                        name='description'
                        multiline
                        rows={5}
                        onChange={(e) => {
                            setValues({
                                ...values,
                                [e.target.name]: e.target.value
                            })
                        }}
                        style={{ marginBottom: '15px', width: 340 }}
                        required
                    />
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onReCaptchaChange}
                    />

                    <Button variant="contained" type='submit' style={{ marginBottom: '15px', width: 100 }}>
                        Create
                    </Button>
                </Box>
            </form>
        </Box>
    )
}


export default CreateTodoItem