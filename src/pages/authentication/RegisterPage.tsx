import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import MaskedInput from 'antd-mask-input';
import { useSignUp } from '../../hooks/useAuth';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { SingUpType } from './type';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const {mutate, isPending} = useSignUp();
  const [showPassword, setShowPassword] = useState<boolean>();

  function handleSubmit(values:SingUpType): void {
    const phone = values.phone_number.split("").filter(item => item !== "").join("");
    mutate({...values, phone_number: phone})
  }

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      <h2 className='text-center text-[32px] font-bold mb-10'>Sign Up</h2>
      <div className='w-[500px] border border-gray-500 p-4 rounded-lg'>
      <Form
          name="authentication"
          layout="vertical"
          onFinish={handleSubmit}
          style={{ width: "100%", }}
        >
          <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: "Please enter your First Name!" },]}>
              <Input size='middle' placeholder='Enter First Name' type='text'/>
          </Form.Item>
          <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: "Please enter your Last Name!" },]}>
              <Input size='middle' placeholder='Enter Last Name' type='text'/>
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your Email!" },
            {pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email!",
            }
          ]}>
              <Input size='middle' placeholder='Enter Email' type='email'/>
          </Form.Item>
          <Form.Item label="Phone Number" name="phone_number" rules={[
            { required: true, message: "Please enter your phone number!" },
            {
              pattern: /^\+998 \d{2} \d{3} \d{2} \d{2}$/,
              message: "Please enter a valid phone number!",
            },
          ]}>
            <MaskedInput
              mask={'+998 00 000 00 00'}
              size='middle'
              placeholder='+998 xx xxx xx xx'
            />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true , message: "Enter password"},{ min: 6, message: "Password must be at least 6 characters long" }]}>
          <Input
              size="middle"
              type={showPassword ? 'text' : 'password'}
              suffix={
                showPassword ? (
                  <EyeOutlined onClick={() => setShowPassword((prev) => !prev)} />
                ) : (
                  <EyeInvisibleOutlined onClick={() => setShowPassword((prev) => !prev)} />
                )
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              style={{ width: "100%", marginTop:'12px' }}
              type="primary"
              className="btn"
              htmlType="submit"
              loading={isPending}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Link to={'/'} className='inline-block rounded-md text-blue-500 text-start hover:bg-blue-200 duration-300 p-1'>Have an Account ?</Link>
      </div>
    </div>
  )
}

export default RegisterPage
