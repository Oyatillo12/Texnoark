import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'
import { MaskedInput } from 'antd-mask-input';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSignIn } from '../../hooks/useAuth';
import { SignInType } from './type';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {mutate, isPending} = useSignIn();

  // submit login form
  const handleSubmit = (values:SignInType) => {
    const phone = values.phone_number.split("").filter(item => item !== "").join("");
    mutate({...values,phone_number: phone});
  }


  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      <h2 className='text-center text-[32px] font-bold mb-10'>Sign In</h2>
      <div className='w-[500px] border border-gray-500 p-4 rounded-lg'>
      <Form
          name="authentication"
          layout="vertical"
          onFinish={handleSubmit}
          style={{ width: "100%", }}
        >
          <Form.Item label="Phone Number" name="phone_number" rules={[
            { required: true, message: "Please enter your phone number!" },
            {
              pattern: /^\+998 \d{2} \d{3} \d{2} \d{2}$/,
              message: "Please enter a valid phone number!",
            },
          ]}>
            <MaskedInput
              mask={'+998 00 000 00 00'}
              size='large'
              placeholder='+998 xx xxx xx xx'
            />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true , message: "Enter password"},{ min: 6, message: "Password must be at least 6 characters long" }]}>
          <Input
              size="large"
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
              style={{ width: "100%" }}
              type="primary"
              className="btn"
              htmlType="submit"
              loading={isPending}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <Link to={'/register'} className='text-blue-500 text-center mt-4 block'>Sign up</Link>
      </div>
    </div>
  )
}

export default LoginPage
