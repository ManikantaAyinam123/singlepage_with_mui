import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import useMediaQuery from '@mui/material/useMediaQuery';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            'https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://wowslider.com/sliders/demo-27/data1/images/hotair1373167.jpg',
    },
];

function Carousel() {
    const theme = useTheme();
    const isLaptopView = useMediaQuery(theme.breakpoints.up('md'));
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >

            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: isLaptopView ? '80vh' : '100%', // Decrease height for laptop view
                                    display: 'block',
                                    width: '100%',
                                    overflow: 'hidden',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>
    );
}

export default Carousel;
