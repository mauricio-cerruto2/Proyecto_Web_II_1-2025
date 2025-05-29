import React, { useState } from 'react';
import { colors } from '../styles/colors';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        fullName: ''
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username.trim()) newErrors.username = 'Nombre de usuario requerido';
        if (!formData.password.trim()) newErrors.password = 'Contraseña requerida';
        if (!formData.fullName.trim()) newErrors.fullName = 'Nombre completo requerido';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const checkUserExists = (username) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        return users.some(user => user.username === username);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        if (checkUserExists(formData.username)) {
            setErrors({ username: 'Este nombre de usuario ya está en uso' });
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
        
        setSuccess(true);
        setFormData({ username: '', password: '', fullName: '' });
        
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background,
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '400px'
            }}>
                <h2 style={{ 
                    color: colors.primary, 
                    textAlign: 'center',
                    marginBottom: '20px'
                }}>
                    Registro de Usuario
                </h2>
                
                {success && (
                    <div style={{
                        backgroundColor: colors.success + '20',
                        color: colors.success,
                        padding: '10px',
                        borderRadius: '4px',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}>
                        ¡Registro exitoso!
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '5px',
                            color: colors.primary,
                            fontWeight: 'bold'
                        }}>
                            Nombre de usuario
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: `1px solid ${errors.username ? colors.error : '#ddd'}`,
                                borderRadius: '4px',
                                boxSizing: 'border-box'
                            }}
                        />
                        {errors.username && (
                            <span style={{ color: colors.error, fontSize: '14px' }}>
                                {errors.username}
                            </span>
                        )}
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '5px',
                            color: colors.primary,
                            fontWeight: 'bold'
                        }}>
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: `1px solid ${errors.password ? colors.error : '#ddd'}`,
                                borderRadius: '4px',
                                boxSizing: 'border-box'
                            }}
                        />
                        {errors.password && (
                            <span style={{ color: colors.error, fontSize: '14px' }}>
                                {errors.password}
                            </span>
                        )}
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '5px',
                            color: colors.primary,
                            fontWeight: 'bold'
                        }}>
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: `1px solid ${errors.fullName ? colors.error : '#ddd'}`,
                                borderRadius: '4px',
                                boxSizing: 'border-box'
                            }}
                        />
                        {errors.fullName && (
                            <span style={{ color: colors.error, fontSize: '14px' }}>
                                {errors.fullName}
                            </span>
                        )}
                    </div>
                    
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: colors.accent,
                            color: colors.primary,
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = colors.highlight}
                        onMouseOut={(e) => e.target.style.backgroundColor = colors.accent}
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
