import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/card';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Label } from '../components/label';
import { Alert, AlertDescription } from '../components/alert';
import '../styles/style.css';

export function LoginPage({ onNavigateToSignup }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = login(email, password);
    if (!success) {
      setError('Invalid credentials. Try user@test.com, support@test.com, or admin@test.com');
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <CardHeader>
          <CardTitle>Complaint Management System</CardTitle>
          <CardDescription>Login to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="form-spacing">
            <div className="field-spacing">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field-spacing">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="button-group">
              <Button type="submit" className="button-full">
                Login
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="button-full"
                onClick={onNavigateToSignup}
              >
                Create Account
              </Button>
            </div>

            <div className="demo-info">
              <p className="demo-info-text">Demo accounts:</p>
              <ul className="demo-list">
                <li className="demo-list-item">User: user@test.com</li>
                <li className="demo-list-item">Support: support@test.com</li>
                <li className="demo-list-item">Admin: admin@test.com</li>
              </ul>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
