// Page templates
const pages = {
  login: `
    <div class="page-container">
      <div class="auth-container">
        <div class="auth-header">
          <h1>Welcome to Pammi</h1>
          <p>Sign in to continue your learning journey</p>

        </div>
        <form class="auth-form" onsubmit="handleLogin(event)">
          <div class="form-group">
            <label for="login-email">Email Address</label>
            <input type="email" id="login-email" name="email" placeholder="Enter your email" required>
            
          </div>
          <div class="form-group">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" name="password" placeholder="Enter your password" required>
          </div>
          <button type="submit" class="auth-btn">Sign In</button>
        </form>
        <div class="auth-footer">
          <p>Don't have an account? <a href="#signup" onclick="navigateToPage('signup'); return false;" class="auth-link">Sign Up</a></p>
        </div>
      </div>
    </div>
  `,
  signup: `
    <div class="page-container">
      <div class="auth-container">
        <div class="auth-header">
          <h1>Join Pammi</h1>
          <p>Create your account to get started</p>
        </div>
        <form class="auth-form" onsubmit="handleSignup(event)">
          <div class="form-group">
            <label for="signup-name">Full Name</label>
            <input type="text" id="signup-name" name="name" placeholder="Enter your full name" required>
          </div>
          <div class="form-group">
            <label for="signup-email">Email Address</label>
            <input type="email" id="signup-email" name="email" placeholder="Enter your email" required>
          </div>
          <div class="form-group">
            <label for="signup-password">Password</label>
            <input type="password" id="signup-password" name="password" placeholder="Create a password" required>
          </div>
          <div class="form-group">
            <label for="signup-role">I am a:</label>
            <select id="signup-role" name="role" required>
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="principal">Principal</option>
              <option value="chairman">Chairman</option>
            </select>
          </div>
          <button type="submit" class="auth-btn">Create Account</button>
        </form>
        <div class="auth-footer">
          <p>Already have an account? <a href="#login" onclick="navigateToPage('login'); return false;" class="auth-link">Sign In</a></p>
        </div>
      </div>
    </div>
  `,
  contact: `
    <div class="page-container">
      <div class="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with the Pammi team</p>
      </div>
      <div class="contact-content">
        <div class="contact-form">
          <h2>Send us a message</h2>
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales Question</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <div class="contact-info">
            <div class="info-item">
              <i class='bx bx-envelope'></i>
              <div>
                <h3>Email</h3>
                <p>hello@slapp.education</p>
              </div>
            </div>
            <div class="info-item">
              <i class='bx bx-phone'></i>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="info-item">
              <i class='bx bx-map'></i>
              <div>
                <h3>Address</h3>
                <p>123 Education Street<br>Learning City, LC 12345</p>
              </div>
            </div>
            <div class="info-item">
              <i class='bx bx-time'></i>
              <div>
                <h3>Support Hours</h3>
                <p>Monday - Friday: 9 AM - 6 PM<br>Saturday: 10 AM - 4 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  privacy: `
    <div class="page-container">
      <div class="page-header">
        <h1>Privacy Policy</h1>
        <p>How we collect, use, and protect your information</p>
      </div>
      <div class="privacy-content">
        <div class="policy-section">
          <h2>Information We Collect</h2>
          <p>At Pammi, we collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
          <ul>
            <li>Account information (name, email, school affiliation)</li>
            <li>Educational data (assignments, progress, quiz results)</li>
            <li>Usage information (how you interact with our platform)</li>
            <li>Device information (browser type, operating system)</li>
          </ul>
        </div>
        <div class="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our educational services</li>
            <li>Personalize your learning experience</li>
            <li>Generate progress reports and analytics</li>
            <li>Communicate with you about your account</li>
            <li>Ensure the security of our platform</li>
          </ul>
        </div>
        <div class="policy-section">
          <h2>Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li>With your explicit consent</li>
            <li>With educational institutions (for enrolled students)</li>
            <li>To comply with legal requirements</li>
            <li>To protect our rights and safety</li>
          </ul>
        </div>
        <div class="policy-section">
          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits.</p>
        </div>
        <div class="policy-section">
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@slapp.education</p>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  about: `
    <div class="page-container">
      <div class="page-header">
        <h1>About Pammi</h1>
        <p>Empowering education through intelligent technology</p>
      </div>
      <div class="about-content">
        <div class="about-section">
          <h2>Our Mission</h2>
          <p>At Pammi, we believe that every professional deserves to share their thoughts with the world. Our mission is to help you transform quick ideas into compelling LinkedIn content that builds authority and inspires connections.</p>
        </div>
        <div class="about-section">
          <h2>What We Do</h2>
          <p>Pammi is an AI-powered content creation platform that helps professionals like you turn ideas into engaging LinkedIn posts. Our tools include:</p>
          <ul>
            <li><strong>Smart Quiz Generation:</strong> AI-powered quizzes that adapt to each student's learning pace</li>
            <li><strong>Progress Tracking:</strong> Real-time monitoring of student performance and growth</li>
            <li><strong>Parent Engagement:</strong> Seamless communication between school and home</li>
            <li><strong>Advanced Analytics:</strong> Data-driven insights for educators and administrators</li>
          </ul>
        </div>
        <div class="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2025 by a team of passionate content creators and technologists, Pammi emerged from the recognition that professionals struggle to share their expertise effectively. We set out to create a platform that would make content creation simple, fast, and impactful for everyone.</p>
        </div>
        <div class="about-section">
          <h2>Our Values</h2>
          <div class="values-grid">
            <div class="value-item">
              <i class='bx bx-heart'></i>
              <h3>Student-Centered</h3>
              <p>Every decision we make prioritizes student learning and success</p>
            </div>
            <div class="value-item">
              <i class='bx bx-shield'></i>
              <h3>Privacy First</h3>
              <p>We protect student data with the highest security standards</p>
            </div>
            <div class="value-item">
              <i class='bx bx-group'></i>
              <h3>Inclusive</h3>
              <p>Our platform is designed to support all learners and learning styles</p>
            </div>
            <div class="value-item">
              <i class='bx bx-trending-up'></i>
              <h3>Innovation</h3>
              <p>We continuously evolve to meet the changing needs of education</p>
            </div>
          </div>
        </div>
        <div class="about-section">
          <h2>Join Our Community</h2>
          <p>Be part of the content creation revolution. Whether you're an experienced professional or just starting your career journey, Pammi is here to support your journey.</p>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  pricing: `
    <div class="page-container">
      <div class="page-header">
        <h1>Pricing</h1>
        <p>Choose the plan that's right for you</p>
      </div>
      <div class="pricing-content">
        <div class="pricing-cards">
          <div class="pricing-card">
            <h3>Free</h3>
            <div class="price">$0<span>/month</span></div>
            <ul>
              <li>Up to 10 posts per month</li>
              <li>Basic AI suggestions</li>
              <li>Email support</li>
              <li>Community access</li>
            </ul>
            <div class="card-footer">
              <button class="pricing-btn">Get Started</button>
            </div>
          </div>
          <div class="pricing-card featured">
            <div class="popular-badge">Most Popular</div>
            <h3>Starter</h3>
            <div class="price">$5<span>/month</span></div>
            <ul>
              <li>Up to 30 AI-generated articles</li>
              <li>All Free features</li>
              <li>Priority LinkedIn integration</li>
              <li>Advanced templates</li>
              <li>Source citation support</li>
              <li>Content scheduling</li>
            </ul>
            <div class="pricing-buttons">
              <button class="pricing-btn featured-btn">Try Free for 14 Days</button>
              <button class="pricing-btn contact-btn">Contact Us</button>
            </div>
          </div>
          <div class="pricing-card">
            <h3>Pro</h3>
            <div class="price">$9<span>/month</span></div>
            <ul>
              <li>Unlimited posts</li>
              <li>Advanced AI suggestions</li>
              <li>Priority support</li>
              <li>Analytics dashboard</li>
              <li>Scheduling features</li>
            </ul>
            <div class="card-footer">
              <button class="pricing-btn">Get Started</button>
            </div>
          </div>
          <div class="pricing-card">
            <h3>Enterprise</h3>
            <div class="price">$100<span>/month</span></div>
            <ul>
              <li>Everything in Pro</li>
              <li>Team collaboration</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
              <li>SLA guarantees</li>
            </ul>
            <button class="pricing-btn">Get Started</button>
          </div>
        </div>
        <div class="starter-options-section">
          <h2>Starter Options</h2>
          <div class="starter-options">
            <div class="starter-option">
              <h3>Individual</h3>
              <p>Perfect for solo professionals</p>
              <ul>
                <li>Up to 20 posts per month</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <button class="pricing-btn">Get Started - $5/month</button>
            </div>
            <div class="starter-option">
              <h3>Small Team</h3>
              <p>Ideal for small businesses</p>
              <ul>
                <li>Up to 100 posts per month</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>Basic team features</li>
              </ul>
              <button class="pricing-btn">Get Started - $29/month</button>
            </div>
            <div class="starter-option">
              <h3>Startup</h3>
              <p>For growing companies</p>
              <ul>
                <li>Unlimited posts</li>
                <li>Full analytics suite</li>
                <li>24/7 priority support</li>
                <li>Team collaboration</li>
                <li>Custom branding</li>
              </ul>
              <button class="pricing-btn">Get Started - $79/month</button>
            </div>
          </div>
        </div>
        <div class="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-item">
            <div class="faq-question">
              <span>Can I change plans later?</span>
              <i class='bx bx-chevron-down'></i>
            </div>
            <div class="faq-answer">
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <span>Do you offer discounts for students?</span>
              <i class='bx bx-chevron-down'></i>
            </div>
            <div class="faq-answer">
              <p>Yes, we offer a 50% discount for students with valid educational email addresses.</p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-question">
              <span>What payment methods do you accept?</span>
              <i class='bx bx-chevron-down'></i>
            </div>
            <div class="faq-answer">
              <p>We accept all major credit cards including Visa, Mastercard, and American Express.</p>
            </div>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  downloads: `
    <div class="page-container">
      <div class="page-header">
        <h1>Downloads</h1>
        <p>Get the Pammi app on your device</p>
      </div>
      <div class="downloads-content">
        <div class="download-options">
          <div class="download-card">
            <i class='bx bxl-windows'></i>
            <h3>Windows</h3>
            <p>For Windows 10 and above</p>
            <button class="download-btn">Download for Windows</button>
          </div>
          <div class="download-card">
            <i class='bx bxl-apple'></i>
            <h3>macOS</h3>
            <p>For macOS 10.14 and above</p>
            <button class="download-btn">Download for Mac</button>
          </div>
          <div class="download-card">
            <i class='bx bxl-android'></i>
            <h3>Android</h3>
            <p>Available on Google Play</p>
            <button class="download-btn">Download for Android</button>
          </div>
          <div class="download-card">
            <i class='bx bxl-apple'></i>
            <h3>iOS</h3>
            <p>Available on App Store</p>
            <button class="download-btn">Download for iOS</button>
          </div>
        </div>
        <div class="system-requirements">
          <h2>System Requirements</h2>
          <div class="requirements-grid">
            <div class="requirement-item">
              <h4>Windows</h4>
              <ul>
                <li>Windows 10 or later</li>
                <li>4 GB RAM minimum</li>
                <li>500 MB available space</li>
              </ul>
            </div>
            <div class="requirement-item">
              <h4>macOS</h4>
              <ul>
                <li>macOS 10.14 or later</li>
                <li>4 GB RAM minimum</li>
                <li>500 MB available space</li>
              </ul>
            </div>
            <div class="requirement-item">
              <h4>Mobile</h4>
              <ul>
                <li>Android 7.0 or later</li>
                <li>iOS 12.0 or later</li>
                <li>100 MB available space</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  features: `
    <div class="page-container">
      <div class="page-header">
        <h1>Features</h1>
        <p>Discover what makes Pammi the best content creation tool</p>
      </div>
      <div class="features-content">
        <div class="feature-highlight">
          <div class="feature-image">
            <img src="https://placehold.co/600x400/667eea/ffffff?text=AI+Content+Creation" alt="AI Content Creation">
          </div>
          <div class="feature-text">
            <h2>AI-Powered Content Creation</h2>
            <p>Transform your ideas into engaging LinkedIn posts with our advanced AI technology. Our algorithms understand your voice and enhance it without changing it.</p>
            <ul>
              <li>Instant content generation</li>
              <li>Voice preservation</li>
              <li>Professional tone adjustment</li>
            </ul>
          </div>
        </div>
        <div class="feature-highlight reverse">
          <div class="feature-text">
            <h2>Performance Analytics</h2>
            <p>Track your content performance with detailed analytics and optimization recommendations. Understand what resonates with your audience and create more of it.</p>
            <ul>
              <li>Engagement tracking</li>
              <li>Audience insights</li>
              <li>Optimization suggestions</li>
            </ul>
          </div>
          <div class="feature-image">
            <img src="https://placehold.co/600x400/764ba2/ffffff?text=Performance+Analytics" alt="Performance Analytics">
          </div>
        </div>
        <div class="feature-highlight">
          <div class="feature-image">
            <img src="https://placehold.co/600x400/10b981/ffffff?text=Scheduling" alt="Scheduling">
          </div>
          <div class="feature-text">
            <h2>Smart Scheduling</h2>
            <p>Schedule your posts at optimal times with timezone support and engagement predictions. Maximize your reach without being tied to your computer.</p>
            <ul>
              <li>Optimal timing suggestions</li>
              <li>Timezone support</li>
              <li>Engagement predictions</li>
            </ul>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  integrations: `
    <div class="page-container">
      <div class="page-header">
        <h1>Integrations</h1>
        <p>Connect Pammi with your favorite tools</p>
      </div>
      <div class="integrations-content">
        <div class="integration-search">
          <input type="text" placeholder="Search for integrations...">
          <i class='bx bx-search'></i>
        </div>
        <div class="integration-categories">
          <button class="category-btn active">All</button>
          <button class="category-btn">Social Media</button>
          <button class="category-btn">Productivity</button>
          <button class="category-btn">Analytics</button>
        </div>
        <div class="integration-grid">
          <div class="integration-card">
            <div class="integration-logo">
              <i class='bx bxl-linkedin-square'></i>
            </div>
            <h3>LinkedIn</h3>
            <p>Post directly to LinkedIn with one click</p>
            <button class="connect-btn">Connect</button>
          </div>
          <div class="integration-card" style="opacity: 0.5;">
            <div class="integration-logo">
              <i class='bx bxl-twitter'></i>
            </div>
            <h3>Twitter - Coming Soon</h3>
            <p>Share your content across platforms</p>
            <button class="connect-btn" disabled>Coming Soon</button>
          </div>
          <div class="integration-card" style="opacity: 0.5;">
            <div class="integration-logo">
              <i class='bx bxl-google'></i>
            </div>
            <h3>Google Analytics - Coming Soon</h3>
            <p>Track performance with detailed metrics</p>
            <button class="connect-btn" disabled>Coming Soon</button>
          </div>
          <div class="integration-card" style="opacity: 0.5;">
            <div class="integration-logo">
              <i class='bx bxl-slack'></i>
            </div>
            <h3>Slack - Coming Soon</h3>
            <p>Collaborate with your team</p>
            <button class="connect-btn" disabled>Coming Soon</button>
          </div>
          <div class="integration-card" style="opacity: 0.5;">
            <div class="integration-logo">
              <i class='bx bxl-notion'></i>
            </div>
            <h3>Notion - Coming Soon</h3>
            <p>Sync your content ideas</p>
            <button class="connect-btn" disabled>Coming Soon</button>
          </div>
          <div class="integration-card" style="opacity: 0.5;">
            <div class="integration-logo">
              <i class='bx bxl-trello'></i>
            </div>
            <h3>Trello - Coming Soon</h3>
            <p>Manage your content workflow</p>
            <button class="connect-btn" disabled>Coming Soon</button>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  documentation: `
    <div class="page-container">
      <div class="page-header">
        <h1>Documentation</h1>
        <p>Learn how to get the most out of Pammi</p>
      </div>
      <div class="documentation-content">
        <div class="doc-sidebar">
          <div class="doc-nav">
            <h3>Getting Started</h3>
            <ul>
              <li><a href="#quick-start">Quick Start Guide</a></li>
              <li><a href="#account-setup">Account Setup</a></li>
              <li><a href="#first-post">Creating Your First Post</a></li>
            </ul>
            <h3>Features</h3>
            <ul>
              <li><a href="#ai-generation">AI Content Generation</a></li>
              <li><a href="#analytics">Analytics Dashboard</a></li>
              <li><a href="#scheduling">Scheduling Posts</a></li>
              <li><a href="#integrations">Integrations</a></li>
            </ul>
            <h3>Advanced</h3>
            <ul>
              <li><a href="#customization">Customizing Your Voice</a></li>
              <li><a href="#team-features">Team Collaboration</a></li>
              <li><a href="#api">API Documentation</a></li>
            </ul>
          </div>
        </div>
        <div class="doc-content">
          <div class="doc-section" id="quick-start">
            <h2>Quick Start Guide</h2>
            <p>Welcome to Pammi! This guide will help you get started quickly with our platform.</p>
            <ol>
              <li>Create an account or sign in if you already have one</li>
              <li>Complete your profile setup</li>
              <li>Connect your LinkedIn account</li>
              <li>Start creating content with our AI assistant</li>
            </ol>
          </div>
          <div class="doc-section" id="account-setup">
            <h2>Account Setup</h2>
            <p>Setting up your account is simple and only takes a few minutes.</p>
            <p>After signing up, you'll be guided through our onboarding process where you can:</p>
            <ul>
              <li>Connect your social media accounts</li>
              <li>Set your content preferences</li>
              <li>Customize your AI assistant's tone</li>
              <li>Invite team members (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  blog: `
    <div class="page-container">
      <div class="page-header">
        <h1>Blog</h1>
        <p>Insights, tips, and updates from the Pammi team</p>
      </div>
      <div class="blog-content">
        <div class="blog-posts">
          <div class="blog-post">
            <div class="post-image">
              <img src="https://placehold.co/800x400/667eea/ffffff?text=Content+Strategy" alt="Content Strategy">
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-date">May 15, 2025</span>
                <span class="post-category">Strategy</span>
              </div>
              <h3>5 Content Strategies That Actually Work on LinkedIn</h3>
              <p>Discover proven content strategies that can help you build authority and grow your professional network on LinkedIn.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
          <div class="blog-post">
            <div class="post-image">
              <img src="https://placehold.co/800x400/764ba2/ffffff?text=AI+Writing" alt="AI Writing">
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-date">April 28, 2025</span>
                <span class="post-category">AI</span>
              </div>
              <h3>How AI is Changing Professional Content Creation</h3>
              <p>Explore how artificial intelligence is revolutionizing the way professionals create and share content online.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
          <div class="blog-post">
            <div class="post-image">
              <img src="https://placehold.co/800x400/10b981/ffffff?text=Engagement+Tips" alt="Engagement Tips">
            </div>
            <div class="post-content">
              <div class="post-meta">
                <span class="post-date">April 12, 2025</span>
                <span class="post-category">Tips</span>
              </div>
              <h3>10 Simple Tricks to Increase Your LinkedIn Engagement</h3>
              <p>Learn practical tips that can instantly boost your engagement rates on LinkedIn posts.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
        <div class="pagination">
          <button class="pagination-btn">Previous</button>
          <span class="pagination-info">Page 1 of 5</span>
          <button class="pagination-btn">Next</button>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  changelog: `
    <div class="page-container">
      <div class="page-header">
        <h1>Changelog</h1>
        <p>Keep up with the latest updates and improvements</p>
      </div>
      <div class="changelog-content">
        <div class="changelog-entry">
          <div class="changelog-header">
            <span class="version">v2.5.0</span>
            <span class="date">June 15, 2025</span>
          </div>
          <div class="changelog-changes">
            <h4>New Features</h4>
            <ul>
              <li>Added support for video content creation</li>
              <li>Implemented team collaboration features</li>
              <li>Introduced new analytics dashboard</li>
            </ul>
            <h4>Improvements</h4>
            <ul>
              <li>Enhanced AI content generation accuracy</li>
              <li>Improved mobile app performance</li>
              <li>Updated user interface design</li>
            </ul>
            <h4>Bug Fixes</h4>
            <ul>
              <li>Fixed scheduling timezone issues</li>
              <li>Resolved LinkedIn posting errors</li>
              <li>Fixed analytics data display issues</li>
            </ul>
          </div>
        </div>
        <div class="changelog-entry">
          <div class="changelog-header">
            <span class="version">v2.4.1</span>
            <span class="date">May 30, 2025</span>
          </div>
          <div class="changelog-changes">
            <h4>Improvements</h4>
            <ul>
              <li>Optimized content generation speed</li>
              <li>Improved mobile responsiveness</li>
            </ul>
            <h4>Bug Fixes</h4>
            <ul>
              <li>Fixed login issues for some users</li>
              <li>Resolved scheduling conflicts</li>
            </ul>
          </div>
        </div>
        <div class="changelog-entry">
          <div class="changelog-header">
            <span class="version">v2.4.0</span>
            <span class="date">May 15, 2025</span>
          </div>
          <div class="changelog-changes">
            <h4>New Features</h4>
            <ul>
              <li>Added support for Twitter cross-posting</li>
              <li>Implemented content scheduling</li>
            </ul>
            <h4>Improvements</h4>
            <ul>
              <li>Enhanced AI voice matching</li>
              <li>Improved analytics reporting</li>
            </ul>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  help: `
    <div class="page-container">
      <div class="page-header">
        <h1>Help Center</h1>
        <p>Find answers to common questions and get support</p>
      </div>
      <div class="help-content">
        <div class="help-search">
          <input type="text" placeholder="Search help articles...">
          <i class='bx bx-search'></i>
        </div>
        <div class="help-categories">
          <div class="help-category">
            <h3><i class='bx bx-user'></i> Account Management</h3>
            <ul>
              <li><a href="#">How to create an account</a></li>
              <li><a href="#">Updating your profile</a></li>
              <li><a href="#">Changing your password</a></li>
              <li><a href="#">Deleting your account</a></li>
            </ul>
          </div>
          <div class="help-category">
            <h3><i class='bx bx-rocket'></i> Getting Started</h3>
            <ul>
              <li><a href="#">Quick start guide</a></li>
              <li><a href="#">Connecting social accounts</a></li>
              <li><a href="#">Creating your first post</a></li>
              <li><a href="#">Understanding the dashboard</a></li>
            </ul>
          </div>
          <div class="help-category">
            <h3><i class='bx bx-cog'></i> Settings & Preferences</h3>
            <ul>
              <li><a href="#">Customizing your AI voice</a></li>
              <li><a href="#">Notification settings</a></li>
              <li><a href="#">Privacy controls</a></li>
              <li><a href="#">Integration settings</a></li>
            </ul>
          </div>
          <div class="help-category">
            <h3><i class='bx bx-bar-chart-alt'></i> Analytics & Reporting</h3>
            <ul>
              <li><a href="#">Understanding your metrics</a></li>
              <li><a href="#">Exporting data</a></li>
              <li><a href="#">Setting up goals</a></li>
              <li><a href="#">Comparing performance</a></li>
            </ul>
          </div>
        </div>
        <div class="support-contact">
          <h2>Need More Help?</h2>
          <p>Our support team is available 24/7 to assist you.</p>
          <div class="contact-options">
            <div class="contact-option">
              <i class='bx bx-chat'></i>
              <div>
                <h4>Live Chat</h4>
                <p>Chat with our support team</p>
              </div>
            </div>
            <div class="contact-option">
              <i class='bx bx-envelope'></i>
              <div>
                <h4>Email Support</h4>
                <p>support@pammi.com</p>
              </div>
            </div>
            <div class="contact-option">
              <i class='bx bx-phone'></i>
              <div>
                <h4>Phone Support</h4>
                <p>+91 8309341208</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  terms: `
    <div class="page-container">
      <div class="page-header">
        <h1>Terms of Service</h1>
        <p>Our terms and conditions for using Pammi</p>
      </div>
      <div class="terms-content">
        <div class="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Pammi service, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        </div>
        <div class="terms-section">
          <h2>2. Description of Service</h2>
          <p>Pammi provides an AI-powered content creation platform that helps professionals create engaging social media content.</p>
        </div>
        <div class="terms-section">
          <h2>3. User Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</p>
        </div>
        <div class="terms-section">
          <h2>4. Intellectual Property</h2>
          <p>The service and its original content, features, and functionality are owned by Pammi and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </div>
        <div class="terms-section">
          <h2>5. Termination</h2>
          <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        </div>
        <div class="terms-section">
          <h2>6. Limitation of Liability</h2>
          <p>In no event shall Pammi, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.</p>
        </div>
        <div class="terms-section">
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  cookie: `
    <div class="page-container">
      <div class="page-header">
        <h1>Cookie Policy</h1>
        <p>How we use cookies and tracking technologies</p>
      </div>
      <div class="cookie-content">
        <div class="policy-section">
          <h2>What Are Cookies</h2>
          <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.</p>
        </div>
        <div class="policy-section">
          <h2>How We Use Cookies</h2>
          <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
          <ul>
            <li>Site preferences cookies</li>
            <li>Account related cookies</li>
            <li>Login related cookies</li>
            <li>Email newsletters related cookies</li>
          </ul>
        </div>
        <div class="policy-section">
          <h2>Third Party Cookies</h2>
          <p>In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
          <ul>
            <li>Google Analytics cookies</li>
            <li>Social media cookies</li>
            <li>Advertising cookies</li>
          </ul>
        </div>
        <div class="policy-section">
          <h2>More Information</h2>
          <p>Hopefully, that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  gdpr: `
    <div class="page-container">
      <div class="page-header">
        <h1>GDPR Compliance</h1>
        <p>Our commitment to protecting your privacy</p>
      </div>
      <div class="gdpr-content">
        <div class="policy-section">
          <h2>Data Protection</h2>
          <p>We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
        </div>
        <div class="policy-section">
          <h2>Your Rights</h2>
          <p>Under the GDPR, you have the following rights:</p>
          <ul>
            <li>The right to be informed</li>
            <li>The right of access</li>
            <li>The right to rectification</li>
            <li>The right to erasure</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object</li>
            <li>Rights in relation to automated decision making and profiling</li>
          </ul>
        </div>
        <div class="policy-section">
          <h2>Data Collection</h2>
          <p>We may collect the following information:</p>
          <ul>
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>Demographic information</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>
        </div>
        <div class="policy-section">
          <h2>Data Usage</h2>
          <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
          <ul>
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>Sending promotional emails about new products, special offers or other information which we think you may find interesting</li>
            <li>From time to time, we may also use your information to contact you for market research purposes</li>
          </ul>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  forum: `
    <div class="page-container">
      <div class="page-header">
        <h1>Community Forum</h1>
        <p>Connect with other Pammi users and share ideas</p>
      </div>
      <div class="forum-content">
        <div class="forum-header">
          <div class="forum-search">
            <input type="text" placeholder="Search discussions...">
            <i class='bx bx-search'></i>
          </div>
          <button class="new-topic-btn">Start New Discussion</button>
        </div>
        <div class="forum-categories">
          <div class="category">
            <h3><i class='bx bx-help-circle'></i> Getting Started</h3>
            <p>Questions for new users</p>
            <span class="topic-count">24 topics</span>
          </div>
          <div class="category">
            <h3><i class='bx bx-rocket'></i> Tips & Tricks</h3>
            <p>Share your best practices</p>
            <span class="topic-count">42 topics</span>
          </div>
          <div class="category">
            <h3><i class='bx bx-bug'></i> Bug Reports</h3>
            <p>Report issues and problems</p>
            <span class="topic-count">8 topics</span>
          </div>
          <div class="category">
            <h3><i class='bx bx-bulb'></i> Feature Requests</h3>
            <p>Suggest new features</p>
            <span class="topic-count">16 topics</span>
          </div>
        </div>
        <div class="recent-topics">
          <h2>Recent Discussions</h2>
          <div class="topic-list">
            <div class="topic">
              <div class="topic-info">
                <h4>Best practices for LinkedIn content</h4>
                <div class="topic-meta">
                  <span class="author">Sarah Johnson</span>
                  <span class="replies">12 replies</span>
                  <span class="last-post">2 hours ago</span>
                </div>
              </div>
              <div class="topic-category">Tips & Tricks</div>
            </div>
            <div class="topic">
              <div class="topic-info">
                <h4>New scheduling feature feedback</h4>
                <div class="topic-meta">
                  <span class="author">Michael Chen</span>
                  <span class="replies">8 replies</span>
                  <span class="last-post">5 hours ago</span>
                </div>
              </div>
              <div class="topic-category">Feature Requests</div>
            </div>
            <div class="topic">
              <div class="topic-info">
                <h4>Mobile app crashing on iOS</h4>
                <div class="topic-meta">
                  <span class="author">Emma Rodriguez</span>
                  <span class="replies">15 replies</span>
                  <span class="last-post">1 day ago</span>
                </div>
              </div>
              <div class="topic-category">Bug Reports</div>
            </div>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  faqs: `
    <div class="page-container">
      <div class="page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Pammi</p>
      </div>
      <div class="faq-container">
        <div class="faq-item">
          <div class="faq-question">
            <span>How do I get started?</span>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div class="faq-answer">
            <p>Simply sign up for a free account, complete the setup wizard, and you'll be ready to start creating compelling LinkedIn content within minutes.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>What industries does Pammi support?</span>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div class="faq-answer">
            <p>Pammi transforms quick thoughts into engaging LinkedIn content for professionals across all industries. Whether you're in tech, healthcare, finance, or any other field, Pammi adapts to your specific needs.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Which AI models power Pammi?</span>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div class="faq-answer">
            <p>Pammi uses advanced AI models specifically trained to enhance your professional voice and create compelling content. Our models are trained on professional content and optimized for LinkedIn engagement.</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>How does Pammi's pricing work?</span>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div class="faq-answer">
            <p>We offer flexible pricing plans: Free for individuals (up to 10 posts/month), Pro for professionals ($9/month), and Enterprise for teams ($100/month).</p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>Need help or have feedback?</span>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div class="faq-answer">
            <p>Our support team is available 24/7 via chat, email, or phone. We also have extensive documentation and video tutorials to help you get the most out of Pammi.</p>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `,
  careers: `
    <div class="page-container">
      <div class="page-header">
        <h1>Careers at Pammi</h1>
        <p>Join our team and help shape the future of content creation</p>
      </div>
      <div class="careers-content">
        <div class="careers-intro">
          <h2>Why Work at Pammi?</h2>
          <p>We're a team of passionate technologists, designers, and content creators working to revolutionize how professionals share their expertise with the world.</p>
          <div class="benefits">
            <div class="benefit">
              <i class='bx bx-health'></i>
              <h3>Health & Wellness</h3>
              <p>Comprehensive medical, dental, and vision coverage</p>
            </div>
            <div class="benefit">
              <i class='bx bx-money'></i>
              <h3>Competitive Compensation</h3>
              <p>Salary and equity packages that align with top tech companies</p>
            </div>
            <div class="benefit">
              <i class='bx bx-time'></i>
              <h3>Work-Life Balance</h3>
              <p>Flexible schedules and unlimited PTO</p>
            </div>
          </div>
        </div>
        <div class="openings">
          <h2>Open Positions</h2>
          <div class="job-openings">
            <div class="job-opening">
              <h3>Senior Frontend Engineer</h3>
              <p>Help us build the next generation of content creation tools.</p>
              <div class="job-meta">
                <span class="location">Remote</span>
                <span class="type">Full-time</span>
              </div>
              <button class="apply-btn">Apply Now</button>
            </div>
            <div class="job-opening">
              <h3>AI Research Scientist</h3>
              <p>Push the boundaries of what's possible with AI content generation.</p>
              <div class="job-meta">
                <span class="location">San Francisco, CA</span>
                <span class="type">Full-time</span>
              </div>
              <button class="apply-btn">Apply Now</button>
            </div>
            <div class="job-opening">
              <h3>Product Designer</h3>
              <p>Create beautiful, intuitive interfaces for our users.</p>
              <div class="job-meta">
                <span class="location">Remote</span>
                <span class="type">Full-time</span>
              </div>
              <button class="apply-btn">Apply Now</button>
            </div>
          </div>
        </div>
        <div class="culture">
          <h2>Our Culture</h2>
          <p>At Pammi, we believe in fostering an environment of continuous learning, collaboration, and innovation. We value diversity, transparency, and results.</p>
          <div class="culture-values">
            <div class="value">
              <i class='bx bx-group'></i>
              <h3>Collaboration</h3>
              <p>We work together to solve complex problems</p>
            </div>
            <div class="value">
              <i class='bx bx-rocket'></i>
              <h3>Innovation</h3>
              <p>We encourage creative thinking and experimentation</p>
            </div>
            <div class="value">
              <i class='bx bx-heart'></i>
              <h3>Empathy</h3>
              <p>We care deeply about our users and each other</p>
            </div>
          </div>
        </div>
      </div>
      <button class="back-btn" onclick="navigateToHome()">← Back to Home</button>
    </div>
  `
};

// FAQ Toggle Function
function setupFAQ() {
  // Add click event listeners to all FAQ questions
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      // Toggle the active class on the parent FAQ item
      this.parentElement.classList.toggle('active');
      
      // Get the FAQ answer element
      const answer = this.nextElementSibling;
      
      // Toggle the max-height for smooth animation
      if (this.parentElement.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });
}

// Function to show the coming soon popup
function showComingSoonPopup() {
  document.getElementById('comingSoonPopup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  document.getElementById('comingSoonPopup').style.display = 'none';
}

// Add the missing navigation functions at the end of the file
const mainContent = document.querySelector('main');
const originalContent = mainContent.innerHTML;

// Hamburger menu functionality
function toggleMobileMenu() {
  const hamburger = document.getElementById('hamburgerMenu');
  const middleSection = document.getElementById('middleSection');
  
  hamburger.classList.toggle('active');
  middleSection.classList.toggle('active');
  
  // Add delay to links for staggered animation
  const links = middleSection.querySelectorAll('.header-link');
  links.forEach((link, index) => {
    if (middleSection.classList.contains('active')) {
      // Opening menu - staggered animation
      setTimeout(() => {
        link.style.transitionDelay = `${index * 0.1}s`;
      }, 10);
    } else {
      // Closing menu - remove delay
      link.style.transitionDelay = '0s';
    }
  });
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
  const hamburger = document.getElementById('hamburgerMenu');
  const middleSection = document.getElementById('middleSection');
  
  hamburger.classList.remove('active');
  middleSection.classList.remove('active');
}

// Page Navigation Functions
function showPage(pageId) {
  // If it's a page we have a template for, show that template
  if (pages[pageId]) {
    mainContent.innerHTML = pages[pageId];
    // Re-initialize FAQ toggles for pages that have them
    if (pageId === 'contact' || pageId === 'privacy' || pageId === 'pricing' || pageId === 'help' || pageId === 'documentation' || pageId === 'faqs') {
      setupFAQ();
    }
    window.scrollTo(0, 0);
    return;
  }
  
  // For the home page, restore the original content
  if (pageId === 'home') {
    mainContent.innerHTML = originalContent;
    setupFAQ(); // Re-initialize FAQ toggles
    window.scrollTo(0, 0);
    return;
  }
}

function navigateToHome() {
  showPage('home');
  history.pushState(null, '', '#home');
  closeMobileMenu(); // Close mobile menu when navigating home
}

function navigateToPage(pageId) {
  showPage(pageId);
  history.pushState(null, '', `#${pageId}`);
  closeMobileMenu(); // Close mobile menu when navigating to a page
}

// Add event listeners when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  // Add click handler for download button
  const downloadButton = document.querySelector('.cta-button');
  if (downloadButton) {
    downloadButton.addEventListener('click', function(e) {
      e.preventDefault();
      showComingSoonPopup();
    });
  }
  
  // Add click handlers for footer links
  const footerLinks = document.querySelectorAll('footer a[href^=\"#\"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageId = this.getAttribute('href').substring(1);
      navigateToPage(pageId);
    });
  });
  
  // Add click handler for hamburger menu
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', toggleMobileMenu);
  }
  
  // Add click handlers for mobile menu links
  const mobileLinks = document.querySelectorAll('.middle-section .header-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Show initial page based on hash or default to home
  const initialPage = window.location.hash.substring(1) || 'home';
  showPage(initialPage);
});
