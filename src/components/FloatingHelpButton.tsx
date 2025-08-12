import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingHelpButton: React.FC = () => {
    return (
        <div className="fixed bottom-24 right-6 z-50">
            <Tooltip 
                title='Need Help? Chat with us' 
                placement="top" 
                arrow
                componentsProps={{
                    tooltip: {
                        sx: {
                            bgcolor: 'common.white',
                            color: 'text.primary',
                            boxShadow: 1,
                            fontSize: '0.875rem',
                            fontWeight: 'medium',
                            '& .MuiTooltip-arrow': {
                                color: 'common.white',
                            },
                        },
                    },
                }}
            >
                <Fab 
                    color="primary"
                    aria-label="Chat with us on WhatsApp"
                    href="https://wa.me/1234567890" 
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        backgroundColor: '#25D366', // Official WhatsApp Green
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#128C7E', // Darker WhatsApp Green
                        }
                    }}
                >
                    <WhatsAppIcon />
                </Fab>
            </Tooltip>
        </div>
    );
};

export default FloatingHelpButton;