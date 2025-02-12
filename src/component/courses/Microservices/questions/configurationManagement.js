const configurationManagement = {
  title: "Configuration Management",
  questions: [
    {
      content: {
        question:
          "What is configuration management, and why is it important in microservices?",
        answer:
          "Configuration management is the process of handling environment-specific settings and properties in microservices to ensure consistency, scalability, and maintainability.",
        explanation:
          "<div><strong>Importance of Configuration Management in Microservices:</strong></div><ul><li><strong>Environment-Specific Configurations:</strong> Helps manage different settings for development, testing, and production environments.</li><li><strong>Centralized Management:</strong> Stores configurations in a central location to avoid manual updates across multiple services.</li><li><strong>Scalability:</strong> Allows dynamic updates to configurations without restarting services.</li><li><strong>Security:</strong> Manages sensitive information like API keys and credentials securely.</li><li><strong>Consistency:</strong> Ensures that all instances of a microservice use the same configuration.</li></ul>",
        codeSnippet:
          '// Example: Using Spring Cloud Config Server for Centralized Configuration\n@Configuration\n@RefreshScope\n@RestController\npublic class ConfigClientController {\n    @Value("${app.message}")\n    private String message;\n    \n    @GetMapping("/message")\n    public String getMessage() {\n        return message;\n    }\n}\n\n// Example: application.properties for Spring Cloud Config Client\nspring.application.name=config-client\nspring.cloud.config.uri=http://localhost:8888',
      },
    },
    {
      content: {
        question:
          "How do you manage environment-specific configurations in microservices?",
        answer:
          "Environment-specific configurations in microservices can be managed using Spring Profiles, externalized configuration files, environment variables, and configuration management tools like Spring Cloud Config and Kubernetes ConfigMaps.",
        explanation:
          "<div><strong>Ways to Manage Environment-Specific Configurations:</strong></div><ul><li><strong>Spring Profiles:</strong> Allows defining different configurations for environments (e.g., dev, test, prod) using `application-{profile}.properties`.</li><li><strong>Environment Variables:</strong> Reads configuration values from system environment variables for flexibility.</li><li><strong>Externalized Configuration:</strong> Uses YAML or properties files outside the application to change settings without code modifications.</li><li><strong>Spring Cloud Config:</strong> Provides a centralized configuration server for managing properties across multiple microservices.</li><li><strong>Kubernetes ConfigMaps & Secrets:</strong> Stores configuration settings and sensitive data separately in Kubernetes environments.</li></ul>",
        codeSnippet:
          '// Example: Using Spring Profiles for Environment-Specific Configurations\n# application-dev.properties\nserver.port=8081\nspring.datasource.url=jdbc:mysql://localhost:3306/devdb\n\n# application-prod.properties\nserver.port=8082\nspring.datasource.url=jdbc:mysql://prod-db-server:3306/proddb\n\n// Example: Enabling Spring Profile in application.properties\nspring.profiles.active=dev\n\n// Example: Reading Environment Variables in Java\n@Value("${DB_HOST}")\nprivate String dbHost;\n\n// Kubernetes ConfigMap Example\ndata:\n  application.properties: |\n    server.port=8080\n    spring.datasource.url=jdbc:mysql://k8s-db:3306/microservice_db',
      },
    },
    {
      content: {
        question: "What is Spring Cloud Config Server, and how does it work?",
        answer:
          "Spring Cloud Config Server is a centralized configuration management solution for distributed systems, allowing microservices to fetch environment-specific settings from a central repository.",
        explanation:
          "<div><strong>How Spring Cloud Config Server Works:</strong></div><ul><li><strong>Centralized Configuration:</strong> Stores configuration properties in a Git repository, database, or filesystem.</li><li><strong>Dynamic Updates:</strong> Enables services to refresh configurations without redeployment.</li><li><strong>Environment-Specific Configurations:</strong> Supports different configurations for development, testing, and production.</li><li><strong>Security & Version Control:</strong> Keeps sensitive information secure and maintains version history through Git.</li><li><strong>Integration with Spring Boot:</strong> Client applications fetch configurations using `spring.cloud.config.uri`.</li></ul>",
        codeSnippet:
          "// Example: Setting Up a Spring Cloud Config Server\n@SpringBootApplication\n@EnableConfigServer\npublic class ConfigServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ConfigServerApplication.class, args);\n    }\n}\n\n// application.properties for Config Server\nserver.port=8888\nspring.cloud.config.server.git.uri=https://github.com/example/config-repo\n\n// Example: Client Microservice Configuration\nspring.application.name=config-client\nspring.cloud.config.uri=http://localhost:8888\nspring.profiles.active=dev\n\n// Accessing Configuration from Config Server\nGET http://localhost:8888/config-client/dev",
      },
    },
    {
      content: {
        question:
          "How do you secure sensitive configuration properties in microservices?",
        answer:
          "Sensitive configuration properties in microservices can be secured using encryption, environment variables, secrets management tools, and access control mechanisms.",
        explanation:
          "<div><strong>Ways to Secure Sensitive Configuration Properties:</strong></div><ul><li><strong>Environment Variables:</strong> Store sensitive values like database credentials and API keys as environment variables instead of hardcoding them.</li><li><strong>Spring Cloud Config with Encryption:</strong> Uses symmetric or asymmetric encryption to secure properties.</li><li><strong>Vault or AWS Secrets Manager:</strong> External secrets management tools like HashiCorp Vault or AWS Secrets Manager securely store and retrieve sensitive data.</li><li><strong>Kubernetes Secrets:</strong> Stores confidential information separately from configuration in Kubernetes environments.</li><li><strong>Access Control:</strong> Restrict access to configuration repositories and use role-based access controls (RBAC).</li></ul>",
        codeSnippet:
          "// Example: Encrypting Sensitive Properties in Spring Cloud Config\n# Store Encrypted Property\ndb.password={cipher}AQBz...encryptedText\n\n// Example: Using Kubernetes Secrets\napiVersion: v1\nkind: Secret\nmetadata:\n  name: db-secret\ntype: Opaque\ndata:\n  DB_PASSWORD: c2VjcmV0UGFzc3dvcmQ=\n\n// Example: Using HashiCorp Vault with Spring Boot\nspring.cloud.vault.uri=http://localhost:8200\nspring.cloud.vault.token=my-root-token\nspring.datasource.password=${vault.db.password}",
      },
    },
    {
      comparision: {
        question:
          "What is the difference between application.properties and application.yml?",
        compareHeading: ["application.properties", "application.yml"],
        comparision: [
          {
            "application.properties": {
              Definition:
                "A configuration file in Spring Boot that stores key-value pairs in a properties format.",
              Syntax: "Uses key=value format (e.g., server.port=8080).",
              Readability:
                "Less readable for hierarchical configurations as each key must be fully specified.",
              "Hierarchy Representation":
                "Represents nested properties using dots (e.g., spring.datasource.url).",
              "Multiline Support":
                "Does not support multiline values natively; requires escaping characters.",
              Usage:
                "Preferred for simple configurations with fewer nested properties.",
              Example:
                "server.port=8080\nspring.datasource.url=jdbc:mysql://localhost:3306/db",
            },
          },
          {
            "application.yml": {
              Definition:
                "A configuration file in Spring Boot that uses YAML syntax to store key-value pairs.",
              Syntax:
                "Uses indentation and colons for key-value pairs (e.g., server:\n  port: 8080).",
              Readability:
                "More readable for hierarchical data due to indentation-based structure.",
              "Hierarchy Representation":
                "Uses indentation to represent nested properties (e.g., spring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/db).",
              "Multiline Support":
                "Supports multiline values naturally without escaping.",
              Usage:
                "Preferred for complex configurations with nested structures.",
              Example:
                "server:\n  port: 8080\nspring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/db",
            },
          },
        ],
        image: "",
      },
    },
    {
      content: {
        question:
          "How do you refresh configuration changes dynamically in Spring Boot?",
        answer:
          "Configuration changes can be refreshed dynamically in Spring Boot using Spring Cloud Config Server with `@RefreshScope` and the `/actuator/refresh` endpoint.",
        explanation:
          "<div><strong>Methods to Refresh Configuration Dynamically:</strong></div><ul><li><strong>Spring Cloud Config Server:</strong> Fetches updated configuration from a central repository.</li><li><strong>@RefreshScope:</strong> Enables beans to reload updated configurations when triggered.</li><li><strong>Actuator Refresh Endpoint:</strong> Calls `/actuator/refresh` to reload properties dynamically.</li><li><strong>Spring Cloud Bus:</strong> Broadcasts configuration changes across multiple microservices using message brokers like RabbitMQ or Kafka.</li></ul>",
        codeSnippet:
          '// Example: Enabling Dynamic Configuration Refresh\n@RestController\n@RefreshScope\npublic class ConfigController {\n    @Value("${app.message}")\n    private String message;\n\n    @GetMapping("/message")\n    public String getMessage() {\n        return message;\n    }\n}\n\n// Enable Actuator and Refresh Endpoint in application.properties\nmanagement.endpoints.web.exposure.include=refresh\n\n// Refresh Configuration via Actuator Endpoint (Command)\ncurl -X POST http://localhost:8080/actuator/refresh\n\n// Example: Using Spring Cloud Bus for Automatic Refresh\nspring.cloud.bus.enabled=true\nspring.rabbitmq.host=localhost',
      },
    },
    {
      content: {
        question:
          "What is the use of @ConfigurationProperties annotation in Spring Boot?",
        answer:
          "The `@ConfigurationProperties` annotation in Spring Boot is used to bind external configuration properties from application.properties or application.yml files to a Java class.",
        explanation:
          "<div><strong>Key Features of @ConfigurationProperties:</strong></div><ul><li><strong>Type-Safe Configuration:</strong> Maps properties to a strongly-typed Java class.</li><li><strong>Supports Nested Properties:</strong> Enables hierarchical property binding.</li><li><strong>Reduces Boilerplate Code:</strong> Avoids multiple `@Value` annotations for related properties.</li><li><strong>Works with Spring Boot's Relaxed Binding:</strong> Supports different property naming conventions.</li></ul>",
        codeSnippet:
          '// Example: Using @ConfigurationProperties to Bind Properties\n@ConfigurationProperties(prefix = "app")\n@Component\npublic class AppConfig {\n    private String name;\n    private String version;\n    \n    // Getters and Setters\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n    public String getVersion() { return version; }\n    public void setVersion(String version) { this.version = version; }\n}\n\n// application.properties\napp.name=MyApplication\napp.version=1.0.0\n\n// Accessing Configuration in a Controller\n@RestController\npublic class ConfigController {\n    private final AppConfig appConfig;\n    \n    public ConfigController(AppConfig appConfig) {\n        this.appConfig = appConfig;\n    }\n    \n    @GetMapping("/config")\n    public String getConfig() {\n        return "App: " + appConfig.getName() + ", Version: " + appConfig.getVersion();\n    }\n}',
      },
    },
    {
      content: {
        question:
          "How can you store microservices configurations in Git using Spring Cloud Config?",
        answer:
          "Spring Cloud Config allows storing and managing microservices configurations in a centralized Git repository, providing versioning, consistency, and dynamic updates.",
        explanation:
          "<div><strong>Steps to Store Microservices Configurations in Git:</strong></div><ul><li><strong>Create a Git Repository:</strong> Store configuration files in a Git repository (e.g., GitHub, GitLab, Bitbucket).</li><li><strong>Set Up Spring Cloud Config Server:</strong> A central server that fetches configurations from Git.</li><li><strong>Point Clients to Config Server:</strong> Microservices retrieve configurations from the Config Server.</li><li><strong>Enable Dynamic Refresh:</strong> Use `/actuator/refresh` to reload configurations without restarting services.</li></ul>",
        codeSnippet:
          '// Step 1: Create a Git repository and add a configuration file\n# my-config-repo/application.properties\nserver.port=8081\napp.message=Hello from Git Config\n\n// Step 2: Set up Spring Cloud Config Server\n@SpringBootApplication\n@EnableConfigServer\npublic class ConfigServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ConfigServerApplication.class, args);\n    }\n}\n\n// application.properties for Config Server\nserver.port=8888\nspring.cloud.config.server.git.uri=https://github.com/user/my-config-repo\n\n// Step 3: Configure a Microservice to Use Config Server\n# application.properties\nspring.application.name=my-microservice\nspring.config.import=optional:configserver:http://localhost:8888\n\n// Access Config from a Microservice\n@RestController\n@RefreshScope\npublic class ConfigController {\n    @Value("${app.message}")\n    private String message;\n\n    @GetMapping("/message")\n    public String getMessage() {\n        return message;\n    }\n}\n\n// Refresh Configuration Dynamically\ncurl -X POST http://localhost:8081/actuator/refresh',
      },
    },
    {
      content: {
        question:
          "What are the advantages of using centralized configuration management in microservices?",
        answer:
          "Centralized configuration management in microservices ensures consistency, security, and easier updates across multiple services.",
        explanation:
          "<div><strong>Key Advantages of Centralized Configuration Management:</strong></div><ul><li><strong>Consistency:</strong> Ensures all microservices use the same configuration settings, reducing discrepancies.</li><li><strong>Security:</strong> Sensitive credentials (e.g., database passwords, API keys) can be securely managed and encrypted.</li><li><strong>Dynamic Updates:</strong> Configurations can be changed without restarting services, improving uptime.</li><li><strong>Version Control:</strong> Storing configurations in Git enables tracking changes and rolling back if necessary.</li><li><strong>Scalability:</strong> Supports large-scale applications by avoiding manual configuration updates.</li><li><strong>Environment-Specific Configurations:</strong> Simplifies managing different settings for development, testing, and production.</li></ul>",
        codeSnippet:
          "// Example: Using Spring Cloud Config for Centralized Configuration\n@SpringBootApplication\n@EnableConfigServer\npublic class ConfigServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ConfigServerApplication.class, args);\n    }\n}\n\n// application.properties for Config Server\nserver.port=8888\nspring.cloud.config.server.git.uri=https://github.com/user/my-config-repo\n\n// Access Configurations in a Microservice\n# application.properties\nspring.application.name=my-microservice\nspring.config.import=optional:configserver:http://localhost:8888\n\n// Refresh Configuration Dynamically\ncurl -X POST http://localhost:8081/actuator/refresh",
      },
    },
    {
      content: {
        question:
          "How does Kubernetes ConfigMap help in managing microservices configurations?",
        answer:
          "Kubernetes ConfigMap allows externalizing configuration properties from microservices, enabling dynamic and environment-specific configurations without modifying the application code.",
        explanation:
          "<div><strong>Key Benefits of Kubernetes ConfigMap:</strong></div><ul><li><strong>Decouples Configuration:</strong> Stores configuration separately from application code.</li><li><strong>Environment-Specific Settings:</strong> Allows defining different configurations for different environments (e.g., dev, staging, production).</li><li><strong>Dynamic Updates:</strong> Applications can reload configurations without requiring redeployment.</li><li><strong>Secure and Centralized Management:</strong> Helps manage sensitive settings separately using Kubernetes Secrets.</li><li><strong>Works with Pods:</strong> ConfigMaps can be mounted as environment variables or files inside Kubernetes Pods.</li></ul>",
        codeSnippet:
          '# Step 1: Create a ConfigMap YAML file\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\n  namespace: default\ndata:\n  application.properties: |\n    server.port=8081\n    app.message=Hello from Kubernetes ConfigMap\n\n# Step 2: Apply the ConfigMap to Kubernetes\nkubectl apply -f configmap.yaml\n\n# Step 3: Mount ConfigMap in a Deployment\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-microservice\nspec:\n  replicas: 1\n  template:\n    spec:\n      containers:\n        - name: my-container\n          image: my-microservice:latest\n          volumeMounts:\n            - name: config-volume\n              mountPath: /config\n      volumes:\n        - name: config-volume\n          configMap:\n            name: app-config\n\n# Step 4: Use ConfigMap in a Spring Boot Application\n@Configuration\n@PropertySource("file:/config/application.properties")\npublic class Config {\n    @Value("${app.message}")\n    private String message;\n\n    @GetMapping("/message")\n    public String getMessage() {\n        return message;\n    }\n}',
      },
    },
  ],
};

export default configurationManagement;
