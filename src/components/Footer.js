import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaGlobe, FaLink, FaExclamationTriangle, FaHome, FaInfoCircle, FaCog, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';

const Footer = () => {
  const handleReportIssue = () => {
    window.location.href = 'mailto:tarunkumar0011235@gmail.com';
  };

  return (
    <Box component="footer"  bgcolor="#f9d687" py={5} px={2}>
      <Grid container spacing={4} justifyContent="center">
        {/* Explore Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h2" mb={2} display="flex" alignItems="center" fontWeight="bold">
            <FaGlobe style={{ marginRight: 8 }} />
            Explore
          </Typography>
          <Box component="ul" p={0} m={0} listStyle="none">
            {[
              { icon: <FaHome />, text: 'Home', link: '/' },
              { icon: <FaInfoCircle />, text: 'About Me', link: 'https://meek-manatee-28f187.netlify.app/' },
              { icon: <FaCog />, text: 'Services', link: '#' },
              { icon: <FaEnvelope />, text: 'Contact', link: '#' },
            ].map((item, index) => (
              <Box key={index} component="li" display="flex" alignItems="center" mb={1}>
                {item.icon}
                <Link to={item.link} style={{ marginLeft: 8, textDecoration: 'none', color: 'inherit' }}>
                  {item.text}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Connect Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h2" mb={2} display="flex" alignItems="center" fontWeight="bold">
            <FaLink style={{ marginRight: 8 }} />
            Connect
          </Typography>
          <Box component="ul" p={0} m={0} listStyle="none">
            {[
              { icon: <FaLinkedinIn />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/tarun-kumar-4bb017215/' },
              { icon: <FaGithub/>, text: 'Github', link: 'https://github.com/Be-Useful' },
              { icon: <FaInstagram />, text: 'Instagram', link: 'https://www.instagram.com/ta.runkumar7390/' },
              { icon: <FaTwitter />, text: 'Twitter', link: '#' },
            ].map((item, index) => (
              <Box key={index} component="li" display="flex" alignItems="center" mb={1}>
                {item.icon}
                <Link to={item.link} style={{ marginLeft: 8, textDecoration: 'none', color: 'inherit' }}>
                  {item.text}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Report Issues Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h2" mb={2} display="flex" alignItems="center" fontWeight="bold">
            <FaExclamationTriangle style={{ marginRight: 8 }} />
            Report Technical Issues
          </Typography>
          <Typography variant="body2" mb={2}>
            If you encounter any technical issues while using our website, please feel free to email us at:
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleReportIssue}
            sx={{ textTransform: 'none', borderRadius: '8px' }}
          >
            Report Issue
          </Button>
        </Grid>
      </Grid>
      {/* Footer Bottom */}
      <Box textAlign="center" mt={4} color="text.secondary">
        &copy; 2024 Move Well. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
