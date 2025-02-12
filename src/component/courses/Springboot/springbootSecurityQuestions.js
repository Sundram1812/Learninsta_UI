const springbootSecurityQuestions = {
  title: "Spring Boot Security",
  questions: [
    {
      content: {
        question: "What is Spring Security, and why is it used?",
        answer:
          "Spring Security is a framework that provides authentication, authorization, and protection against common security vulnerabilities in Spring applications.",
        explanation:
          "<div><strong>Why Use Spring Security?</strong></div><ul><li><strong>Authentication:</strong> Verifies user identity using credentials like username and password.</li><li><strong>Authorization:</strong> Grants or restricts access to resources based on user roles.</li><li><strong>Security Features:</strong> Protects against threats like CSRF, XSS, and session fixation attacks.</li><li><strong>Integration:</strong> Works with databases, OAuth2, JWT, and third-party authentication providers.</li></ul>",
        codeSnippet:
          "// Basic Spring Security Configuration\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated())\n            .formLogin(Customizer.withDefaults());\n        return http.build();\n    }\n}",
      },
    },
    {
      content: {
        question:
          "How do you enable Spring Security in a Spring Boot application?",
        answer:
          "Spring Security is enabled automatically in a Spring Boot application by including the `spring-boot-starter-security` dependency.",
        explanation:
          "<div><strong>Steps to Enable Spring Security:</strong></div><ul><li><strong>Add Dependency:</strong> Include `spring-boot-starter-security` in `pom.xml`.</li><li><strong>Default Configuration:</strong> By default, Spring Security applies basic authentication with generated credentials.</li><li><strong>Custom Configuration:</strong> Use `SecurityFilterChain` to define security rules.</li></ul>",
        codeSnippet:
          '// Adding Spring Security Dependency in pom.xml\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n\n// Custom Security Configuration\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.authorizeHttpRequests(auth -> auth.requestMatchers("/public").permitAll()\n            .anyRequest().authenticated())\n            .formLogin(Customizer.withDefaults());\n        return http.build();\n    }\n}',
      },
    },
    {
      content: {
        question: "What is the default security mechanism in Spring Boot?",
        answer:
          "By default, Spring Boot uses Basic Authentication with a randomly generated password for securing all endpoints.",
        explanation:
          "<div><strong>Default Security Mechanism in Spring Boot:</strong></div><ul><li><strong>Basic Authentication:</strong> Requires username and password for API access.</li><li><strong>Default Credentials:</strong> The username is `user`, and the password is auto-generated (logged in the console).</li><li><strong>Security Filters:</strong> Applies authentication checks on all endpoints unless explicitly configured otherwise.</li></ul>",
        codeSnippet:
          "// Disabling Default Security in application.properties\nspring.security.user.name=admin\nspring.security.user.password=admin123\n\n// OR Disable Security Entirely (Not Recommended for Production)\n@Configuration\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.authorizeHttpRequests(auth -> auth.anyRequest().permitAll())\n            .csrf(AbstractHttpConfigurer::disable); // Disabling CSRF for APIs\n        return http.build();\n    }\n}",
      },
    },
    {
      content: {
        question:
          "How do you configure user authentication in Spring Boot Security?",
        answer:
          "User authentication in Spring Boot Security can be configured using in-memory authentication, database authentication, or external providers like OAuth2 and JWT.",
        explanation:
          "<div><strong>Methods to Configure Authentication:</strong></div><ul><li><strong>In-Memory Authentication:</strong> Stores user credentials directly in the application.</li><li><strong>Database Authentication:</strong> Uses Spring Data JPA and BCrypt password encoding.</li><li><strong>OAuth2 and JWT Authentication:</strong> Implements token-based authentication for secure API access.</li></ul>",
        codeSnippet:
          '// 1. In-Memory Authentication\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public UserDetailsService userDetailsService() {\n        UserDetails user = User.withDefaultPasswordEncoder()\n            .username("admin")\n            .password("admin123")\n            .roles("ADMIN")\n            .build();\n        return new InMemoryUserDetailsManager(user);\n    }\n}\n\n// 2. Database Authentication using UserDetailsService\n@Service\npublic class CustomUserDetailsService implements UserDetailsService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Override\n    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n        User user = userRepository.findByUsername(username)\n            .orElseThrow(() -> new UsernameNotFoundException("User not found"));\n        return new org.springframework.security.core.userdetails.User(\n            user.getUsername(), user.getPassword(), List.of(new SimpleGrantedAuthority("ROLE_USER"))\n        );\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What are the differences between authentication and authorization?",
        compareHeading: ["Authentication", "Authorization"],
        comparision: [
          {
            Authentication: {
              Definition: "The process of verifying a user's identity.",
              Purpose: "Ensures that the user is who they claim to be.",
              Process:
                "Users provide credentials (e.g., username and password) to verify their identity.",
              "Access Control":
                "Grants access to the system after successful verification.",
              Scope: "Applies to users logging in.",
              Methods:
                "Password-based, biometric, OTP, multi-factor authentication.",
              Example: "Logging in to a website using a username and password.",
            },
          },
          {
            Authorization: {
              Definition:
                "The process of determining what actions or resources a user is allowed to access.",
              Purpose:
                "Defines permissions and access control for authenticated users.",
              Process:
                "Checks roles and permissions to allow or deny access to specific resources.",
              "Access Control":
                "Determines what a user can do within the system.",
              Scope: "Applies to user permissions after authentication.",
              Methods:
                "Role-based access control (RBAC), attribute-based access control (ABAC).",
              Example:
                "An authenticated user can view their profile but cannot access the admin panel.",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question: "How do you create a custom login page in Spring Security?",
        answer:
          "You can create a custom login page in Spring Security by configuring `formLogin()` in `SecurityFilterChain` and providing a custom login page URL.",
        explanation:
          '<div><strong>Steps to Create a Custom Login Page:</strong></div><ul><li><strong>1. Create an HTML login page:</strong> Design a custom login form with a username and password field.</li><li><strong>2. Configure Spring Security:</strong> Use `formLogin().loginPage("/custom-login")` to specify the custom login URL.</li><li><strong>3. Handle authentication:</strong> Ensure Spring Security processes the login request at `/login`.</li></ul>',
        codeSnippet:
          '// Security Configuration for Custom Login Page\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated())\n            .formLogin(form -> form\n                .loginPage("/custom-login")\n                .loginProcessingUrl("/login")\n                .defaultSuccessUrl("/home", true)\n                .permitAll())\n            .logout(logout -> logout.logoutUrl("/logout").logoutSuccessUrl("/custom-login"));\n        return http.build();\n    }\n}\n\n<!-- Custom Login Page (custom-login.html) -->\n<form action="/login" method="post">\n    <label>Username:</label> <input type="text" name="username"/><br/>\n    <label>Password:</label> <input type="password" name="password"/><br/>\n    <button type="submit">Login</button>\n</form>',
      },
    },
    {
      content: {
        question:
          "What is the purpose of UserDetailsService in Spring Security?",
        answer:
          "The `UserDetailsService` interface is used to load user-specific data from a database or another source for authentication in Spring Security.",
        explanation:
          "<div><strong>Purpose of UserDetailsService:</strong></div><ul><li><strong>Custom Authentication:</strong> Fetches user details like username, password, and roles from a database.</li><li><strong>Security Integration:</strong> Used by Spring Security to validate user credentials.</li><li><strong>Flexible Authentication:</strong> Supports database authentication with encrypted passwords.</li></ul>",
        codeSnippet:
          '// Custom UserDetailsService Implementation\n@Service\npublic class CustomUserDetailsService implements UserDetailsService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Override\n    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n        User user = userRepository.findByUsername(username)\n            .orElseThrow(() -> new UsernameNotFoundException("User not found"));\n        return new org.springframework.security.core.userdetails.User(\n            user.getUsername(), user.getPassword(), List.of(new SimpleGrantedAuthority("ROLE_USER"))\n        );\n    }\n}\n\n// Configuring Authentication with Custom UserDetailsService\n@Configuration\npublic class SecurityConfig {\n    @Bean\n    public AuthenticationManager authenticationManager(UserDetailsService userDetailsService) {\n        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();\n        authProvider.setUserDetailsService(userDetailsService);\n        authProvider.setPasswordEncoder(new BCryptPasswordEncoder());\n        return new ProviderManager(authProvider);\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How do you configure role-based access control (RBAC) in Spring Boot Security?",
        answer:
          "Role-Based Access Control (RBAC) in Spring Boot Security is configured by assigning roles to users and restricting access to endpoints based on roles.",
        explanation:
          "<div><strong>Steps to Configure RBAC:</strong></div><ul><li><strong>Define User Roles:</strong> Assign roles like `ROLE_USER` and `ROLE_ADMIN` to users.</li><li><strong>Restrict Access:</strong> Use `hasRole()` or `hasAuthority()` to protect endpoints.</li><li><strong>Integrate with Database:</strong> Store user roles in a database and retrieve them using `UserDetailsService`.</li></ul>",
        codeSnippet:
          '// Security Configuration for Role-Based Access Control\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.authorizeHttpRequests(auth -> auth\n            .requestMatchers("/admin").hasRole("ADMIN")\n            .requestMatchers("/user").hasRole("USER")\n            .anyRequest().authenticated())\n            .formLogin(Customizer.withDefaults());\n        return http.build();\n    }\n}\n\n// Assigning Roles in UserDetailsService\n@Service\npublic class CustomUserDetailsService implements UserDetailsService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Override\n    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {\n        User user = userRepository.findByUsername(username)\n            .orElseThrow(() -> new UsernameNotFoundException("User not found"));\n        List<GrantedAuthority> authorities = user.getRoles().stream()\n            .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))\n            .collect(Collectors.toList());\n        return new org.springframework.security.core.userdetails.User(\n            user.getUsername(), user.getPassword(), authorities\n        );\n    }\n}',
      },
    },
    {
      comparision: {
        question:
          "What is the difference between @PreAuthorize, @PostAuthorize, and @Secured annotations?",
        compareHeading: ["@PreAuthorize", "@PostAuthorize", "@Secured"],
        comparision: [
          {
            "@PreAuthorize": {
              Definition: "Checks authorization before the method executes.",
              "Evaluation Timing": "Executed before entering the method.",
              Flexibility:
                "Supports complex SpEL (Spring Expression Language) expressions.",
              "Use Case": "Used to restrict access before method execution.",
              Example:
                "@PreAuthorize(\"hasRole('ADMIN')\")\npublic void deleteUser(Long id) { userService.delete(id); }",
            },
          },
          {
            "@PostAuthorize": {
              Definition:
                "Checks authorization after the method executes and can filter the result.",
              "Evaluation Timing":
                "Executed after the method has returned a value.",
              Flexibility: "Can be used to validate return values.",
              "Use Case":
                "Used when access needs to be determined based on method output.",
              Example:
                '@PostAuthorize("returnObject.owner == authentication.name")\npublic User getUser(Long id) { return userService.findById(id); }',
            },
          },
          {
            "@Secured": {
              Definition:
                "Specifies security roles required to access a method.",
              "Evaluation Timing": "Executed before entering the method.",
              Flexibility:
                "Only supports role-based security, does not use SpEL.",
              "Use Case":
                "Used when simple role-based access control is needed.",
              Example:
                '@Secured("ROLE_ADMIN")\npublic void createUser(User user) { userService.save(user); }',
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question:
          "How do you enable CORS in a Spring Boot Security application?",
        answer:
          "CORS (Cross-Origin Resource Sharing) can be enabled in a Spring Boot Security application using `CorsConfiguration`, `@CrossOrigin`, or by configuring `HttpSecurity`.",
        explanation:
          "<div><strong>Ways to Enable CORS in Spring Boot Security:</strong></div><ul><li><strong>Global Configuration:</strong> Define a `CorsFilter` bean to allow cross-origin requests.</li><li><strong>Controller-Level:</strong> Use `@CrossOrigin` on REST controllers or specific endpoints.</li><li><strong>Security Configuration:</strong> Enable CORS using `http.cors()` in `SecurityFilterChain`.</li></ul>",
        codeSnippet:
          '// 1. Enabling CORS Globally using a Filter\n@Bean\npublic CorsFilter corsFilter() {\n    CorsConfiguration config = new CorsConfiguration();\n    config.setAllowedOrigins(List.of("http://localhost:3000"));\n    config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));\n    config.setAllowedHeaders(List.of("Authorization", "Content-Type"));\n    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n    source.registerCorsConfiguration("/**", config);\n    return new CorsFilter(source);\n}\n\n// 2. Enabling CORS in Security Configuration\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.cors(Customizer.withDefaults()) // Enable CORS\n            .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())\n            .formLogin(Customizer.withDefaults());\n        return http.build();\n    }\n}\n\n// 3. Using @CrossOrigin on a Controller\n@RestController\n@RequestMapping("/api")\n@CrossOrigin(origins = "http://localhost:3000")\npublic class SampleController {\n    @GetMapping("/data")\n    public ResponseEntity<String> getData() {\n        return ResponseEntity.ok("CORS Enabled Response");\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What is JWT (JSON Web Token), and how do you implement it in Spring Boot Security?",
        answer:
          "JWT (JSON Web Token) is a compact, URL-safe token used for securely transmitting information between parties. It is commonly used for authentication and authorization in Spring Boot applications.",
        explanation:
          "<div><strong>Key Components of JWT:</strong></div><ul><li><strong>Header:</strong> Contains the token type (JWT) and signing algorithm.</li><li><strong>Payload:</strong> Contains user claims such as username and roles.</li><li><strong>Signature:</strong> Ensures the token integrity using a secret key.</li></ul><div><strong>Steps to Implement JWT in Spring Boot:</strong></div><ol><li>Create an authentication endpoint to issue JWT tokens.</li><li>Develop a filter to validate JWT tokens in incoming requests.</li><li>Use `OncePerRequestFilter` to check JWT in every request.</li></ol>",
        codeSnippet:
          '// 1. Generate JWT Token\n@Component\npublic class JwtUtil {\n    private final String SECRET_KEY = "my_secret_key";\n    \n    public String generateToken(String username) {\n        return Jwts.builder()\n            .setSubject(username)\n            .setIssuedAt(new Date())\n            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))\n            .signWith(SignatureAlgorithm.HS256, SECRET_KEY)\n            .compact();\n    }\n    \n    public String extractUsername(String token) {\n        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getSubject();\n    }\n    \n    public boolean validateToken(String token, UserDetails userDetails) {\n        return extractUsername(token).equals(userDetails.getUsername());\n    }\n}\n\n// 2. JWT Authentication Filter\n@Component\npublic class JwtFilter extends OncePerRequestFilter {\n    @Autowired\n    private JwtUtil jwtUtil;\n    @Autowired\n    private UserDetailsService userDetailsService;\n    \n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)\n        throws ServletException, IOException {\n        String authHeader = request.getHeader("Authorization");\n        if (authHeader != null && authHeader.startsWith("Bearer ")) {\n            String token = authHeader.substring(7);\n            String username = jwtUtil.extractUsername(token);\n            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {\n                UserDetails userDetails = userDetailsService.loadUserByUsername(username);\n                if (jwtUtil.validateToken(token, userDetails)) {\n                    UsernamePasswordAuthenticationToken authToken =\n                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());\n                    SecurityContextHolder.getContext().setAuthentication(authToken);\n                }\n            }\n        }\n        chain.doFilter(request, response);\n    }\n}\n\n// 3. Security Configuration\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Autowired\n    private JwtFilter jwtFilter;\n    \n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.csrf().disable()\n            .authorizeHttpRequests(auth -> auth.requestMatchers("/authenticate").permitAll()\n            .anyRequest().authenticated())\n            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);\n        return http.build();\n    }\n}\n\n// 4. Authentication Controller to Generate JWT\n@RestController\npublic class AuthController {\n    @Autowired\n    private AuthenticationManager authenticationManager;\n    @Autowired\n    private JwtUtil jwtUtil;\n    \n    @PostMapping("/authenticate")\n    public ResponseEntity<String> authenticate(@RequestBody AuthRequest request) {\n        authenticationManager.authenticate(\n            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));\n        return ResponseEntity.ok(jwtUtil.generateToken(request.getUsername()));\n    }\n}\n\n// 5. AuthRequest Model\npublic class AuthRequest {\n    private String username;\n    private String password;\n    // Getters and Setters\n}',
      },
    },
    {
      content: {
        question: "How does Spring Security handle session management?",
        answer:
          "Spring Security manages sessions using different strategies like `ALWAYS`, `IF_REQUIRED`, `NEVER`, and `STATELESS`.",
        explanation:
          "<div><strong>Session Management Strategies:</strong></div><ul><li><strong>ALWAYS:</strong> A session is always created.</li><li><strong>IF_REQUIRED:</strong> A session is created only if needed (default).</li><li><strong>NEVER:</strong> Spring Security does not create a session but uses an existing one if available.</li><li><strong>STATELESS:</strong> No session is created or used (for REST APIs).</li></ul>",
        codeSnippet:
          "// Configure session management in SecurityConfig\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));\n        return http.build();\n    }\n}",
      },
    },
    {
      content: {
        question: "What are security filters in Spring Security?",
        answer:
          "Security filters in Spring Security are used to intercept and process security-related logic in HTTP requests.",
        explanation:
          "<div><strong>Common Security Filters:</strong></div><ul><li><strong>UsernamePasswordAuthenticationFilter:</strong> Handles authentication with username and password.</li><li><strong>BasicAuthenticationFilter:</strong> Supports HTTP Basic Authentication.</li><li><strong>JwtFilter (Custom):</strong> Intercepts requests and validates JWT tokens.</li></ul>",
        codeSnippet:
          "// Custom JWT Security Filter\n@Component\npublic class JwtFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)\n        throws ServletException, IOException {\n        // Custom JWT validation logic\n        chain.doFilter(request, response);\n    }\n}",
      },
    },
    {
      content: {
        question:
          "What is CSRF protection in Spring Security, and how can you enable or disable it?",
        answer:
          "CSRF (Cross-Site Request Forgery) protection prevents unauthorized commands from being transmitted on behalf of an authenticated user.",
        explanation:
          "<div><strong>CSRF Protection:</strong></div><ul><li>Enabled by default in Spring Security.</li><li>Prevents attackers from executing unwanted actions in a user's session.</li></ul><div><strong>Disabling CSRF (for REST APIs):</strong> CSRF protection is not needed for stateless APIs, so it can be disabled.</div>",
        codeSnippet:
          "// Disabling CSRF in SecurityConfig\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.csrf().disable(); // Disable CSRF for REST APIs\n        return http.build();\n    }\n}",
      },
    },
    {
      content: {
        question:
          "How do you implement OAuth2 authentication in Spring Boot Security?",
        answer:
          "OAuth2 authentication in Spring Boot can be implemented using Spring Security and the `spring-boot-starter-oauth2-client` dependency.",
        explanation:
          "<div><strong>Steps to Implement OAuth2 Authentication:</strong></div><ol><li>Add OAuth2 dependency.</li><li>Configure OAuth2 client details in `application.properties`.</li><li>Enable OAuth2 login in `SecurityConfig`.</li></ol>",
        codeSnippet:
          "// SecurityConfig for OAuth2 Authentication\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.oauth2Login(); // Enable OAuth2 Login\n        return http.build();\n    }\n}",
      },
    },
    {
      content: {
        question: "How do you secure REST APIs using Spring Security?",
        answer:
          "REST APIs in Spring Security can be secured using JWT, Basic Authentication, or OAuth2.",
        explanation:
          "<div><strong>Ways to Secure REST APIs:</strong></div><ul><li><strong>JWT:</strong> Use JWT tokens for authentication.</li><li><strong>Basic Authentication:</strong> Use username and password in the request header.</li><li><strong>OAuth2:</strong> Authenticate users using OAuth2 providers.</li></ul>",
        codeSnippet:
          '// Secure REST APIs using JWT in SecurityConfig\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.csrf().disable()\n            .authorizeHttpRequests(auth -> auth.requestMatchers("/api/public/**").permitAll()\n            .anyRequest().authenticated())\n            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));\n        return http.build();\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How can you configure password encoding in Spring Boot Security?",
        answer:
          "Spring Security provides `PasswordEncoder` for encoding passwords securely.",
        explanation:
          "<div><strong>Common Password Encoders:</strong></div><ul><li><strong>BCryptPasswordEncoder:</strong> Strong hashing-based encoding (recommended).</li><li><strong>NoOpPasswordEncoder:</strong> Stores passwords in plain text (not secure).</li></ul>",
        codeSnippet:
          "// Configure BCrypt Password Encoding\n@Bean\npublic PasswordEncoder passwordEncoder() {\n    return new BCryptPasswordEncoder();\n}",
      },
    },
    {
      content: {
        question:
          "What is method-level security, and how do you implement it in Spring Boot?",
        answer:
          "Method-level security allows restricting access to individual methods using annotations like `@PreAuthorize` and `@PostAuthorize`.",
        explanation:
          "<div><strong>Types of Method-Level Security:</strong></div><ul><li><strong>@PreAuthorize:</strong> Evaluates expressions before method execution.</li><li><strong>@PostAuthorize:</strong> Evaluates expressions after method execution.</li><li><strong>@Secured:</strong> Defines role-based access at the method level.</li></ul>",
        codeSnippet:
          '// Example of @PreAuthorize in a Service\n@Service\npublic class UserService {\n    @PreAuthorize("hasRole(\'ADMIN\')")\n    public String adminOnlyMethod() {\n        return "Only admins can access this";\n    }\n}',
      },
    },
    {
      content: {
        question:
          "What are the different authentication providers in Spring Security?",
        answer:
          "Spring Security provides multiple authentication providers, including `DaoAuthenticationProvider`, `LdapAuthenticationProvider`, `OAuth2LoginAuthenticationProvider`, and `JwtAuthenticationProvider`.",
        explanation:
          "<div><strong>Types of Authentication Providers in Spring Security:</strong></div><ul><li><strong>DaoAuthenticationProvider:</strong> Uses a database (via `UserDetailsService`) for authentication.</li><li><strong>LdapAuthenticationProvider:</strong> Authenticates users against an LDAP directory.</li><li><strong>OAuth2LoginAuthenticationProvider:</strong> Supports authentication via OAuth2 providers like Google, GitHub, etc.</li><li><strong>JwtAuthenticationProvider (Custom):</strong> Uses JWT tokens for authentication in REST APIs.</li></ul>",
        codeSnippet:
          "// Example: Configuring DaoAuthenticationProvider\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public AuthenticationManager authManager(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {\n        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();\n        authProvider.setUserDetailsService(userDetailsService);\n        authProvider.setPasswordEncoder(passwordEncoder);\n        return new ProviderManager(authProvider);\n    }\n}",
      },
    },
    {
      content: {
        question:
          "How do you integrate Spring Boot Security with an external identity provider (e.g., LDAP, OAuth, SSO)?",
        answer:
          "Spring Boot Security can be integrated with external identity providers using LDAP, OAuth2, or SSO mechanisms such as SAML and OpenID Connect.",
        explanation:
          "<div><strong>Methods to Integrate External Identity Providers:</strong></div><ul><li><strong>LDAP:</strong> Uses an LDAP directory (e.g., Active Directory) for authentication.</li><li><strong>OAuth2:</strong> Allows authentication via providers like Google, GitHub, or Okta.</li><li><strong>SSO (Single Sign-On):</strong> Uses SAML or OpenID Connect for centralized authentication.</li></ul><div><strong>Example: OAuth2 Integration</strong></div><p>To authenticate users via Google OAuth2, configure the properties and enable OAuth2 login.</p>",
        codeSnippet:
          "// application.properties configuration for Google OAuth2\nspring.security.oauth2.client.registration.google.client-id=your-client-id\nspring.security.oauth2.client.registration.google.client-secret=your-client-secret\nspring.security.oauth2.client.registration.google.scope=profile,email\n\n// Security Configuration for OAuth2 Login\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.oauth2Login(); // Enables OAuth2 authentication\n        return http.build();\n    }\n}",
      },
    },
  ],
};

export default springbootSecurityQuestions;
