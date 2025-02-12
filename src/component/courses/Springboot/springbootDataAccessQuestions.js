const springbootDataAccessQuestions={
    title: "Spring Boot Data JPA",
    questions:[
        {
            "content": {
              "question": "What is Spring Boot Data JPA, and why is it used?",
              "answer": "Spring Boot Data JPA is a module that simplifies database interactions by providing an abstraction over JPA (Java Persistence API) and reducing boilerplate code.",
              "explanation": "<div><strong>Why Use Spring Boot Data JPA?</strong></div><ul><li><strong>Simplifies Database Access:</strong> Reduces the need for manual SQL queries.</li><li><strong>Provides CRUD Operations:</strong> Built-in repository interfaces like `JpaRepository` enable easy database operations.</li><li><strong>Supports Pagination and Sorting:</strong> Makes handling large datasets more efficient.</li><li><strong>Works with Multiple Databases:</strong> Supports MySQL, PostgreSQL, H2, and more.</li></ul>",
              "codeSnippet": "// Example: Using Spring Data JPA in a Spring Boot Application\n\n// 1. Entity Class\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    private String email;\n    \n    // Getters and Setters\n}\n\n// 2. Repository Interface\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {}\n\n// 3. Service Layer\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    public List<User> getAllUsers() {\n        return userRepository.findAll();\n    }\n}\n\n// 4. Controller\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n    \n    @GetMapping\n    public ResponseEntity<List<User>> getUsers() {\n        return ResponseEntity.ok(userService.getAllUsers());\n    }\n}"
            }
          },
          {
            "comparision": {
              "question": "What is the difference between JDBC, JPA, and Hibernate in Spring Boot?",
              "compareHeading": ["JDBC", "JPA", "Hibernate"],
              "comparision": [
                {
                  "JDBC": {
                    "Definition": "Java Database Connectivity (JDBC) is a low-level API for interacting with relational databases.",
                    "Abstraction Level": "Lowest level; requires manual SQL query handling and database connections.",
                    "Ease of Use": "Complex; developers need to manage connections, statements, and transactions manually.",
                    "Performance": "Fast but requires more effort for optimization and management.",
                    "Spring Boot Support": "Supported using JdbcTemplate for simplified JDBC operations.",
                    "Example": "String query = \"SELECT * FROM users WHERE id = ?\";\nPreparedStatement stmt = connection.prepareStatement(query);\nstmt.setInt(1, userId);"
                  }
                },
                {
                  "JPA": {
                    "Definition": "Java Persistence API (JPA) is a specification that defines a standard for ORM (Object-Relational Mapping).",
                    "Abstraction Level": "Higher level; abstracts database interactions and provides automatic mapping between Java objects and database tables.",
                    "Ease of Use": "Simplifies database interactions with annotations and entity management.",
                    "Performance": "Optimized with caching and query optimization but depends on the underlying implementation.",
                    "Spring Boot Support": "Used with Spring Data JPA for simplified repository-based database access.",
                    "Example": "@Entity\npublic class User {\n  @Id @GeneratedValue\n  private Long id;\n  private String name;\n}"
                  }
                },
                {
                  "Hibernate": {
                    "Definition": "An ORM framework that implements JPA and provides additional features for database interaction.",
                    "Abstraction Level": "A JPA provider; offers additional functionalities like caching, lazy loading, and advanced querying.",
                    "Ease of Use": "Simplifies database access further with built-in mechanisms like HQL (Hibernate Query Language).",
                    "Performance": "Efficient with caching, batch processing, and automatic SQL generation.",
                    "Spring Boot Support": "Default JPA provider in Spring Boot; used automatically when JPA is configured.",
                    "Example": "Session session = sessionFactory.openSession();\nUser user = session.get(User.class, id);"
                  }
                }
              ],
              "image": ""
            }
          },
          {
            "content": {
              "question": "How do you configure a database in a Spring Boot application?",
              "answer": "A database in a Spring Boot application is configured using the `application.properties` or `application.yml` file, where you specify the database URL, username, password, and dialect.",
              "explanation": "<div><strong>Steps to Configure a Database in Spring Boot:</strong></div><ul><li><strong>Add Database Dependency:</strong> Include the appropriate database driver in `pom.xml`.</li><li><strong>Configure Database Properties:</strong> Set up connection details in `application.properties` or `application.yml`.</li><li><strong>Use Spring Data JPA:</strong> Define entities and repositories to interact with the database.</li></ul>",
              "codeSnippet": "// 1. Add MySQL Dependency in pom.xml\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <scope>runtime</scope>\n</dependency>\n\n// 2. Configure Database in application.properties\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\nspring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect\nspring.jpa.hibernate.ddl-auto=update\n\n// 3. Entity Class\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    private String email;\n    // Getters and Setters\n}\n\n// 4. Repository Interface\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {}\n\n// 5. Service and Controller to Use the Database\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    public List<User> getAllUsers() {\n        return userRepository.findAll();\n    }\n}\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n    @GetMapping\n    public ResponseEntity<List<User>> getUsers() {\n        return ResponseEntity.ok(userService.getAllUsers());\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What are the different ways to connect Spring Boot with a database?",
              "answer": "Spring Boot provides multiple ways to connect to a database, including JDBC, JPA (Hibernate), Spring Data JPA, and using external database services.",
              "explanation": "<div><strong>Ways to Connect Spring Boot with a Database:</strong></div><ul><li><strong>JDBC (Java Database Connectivity):</strong> Directly interacts with the database using SQL queries.</li><li><strong>JPA (Java Persistence API):</strong> Provides an ORM (Object-Relational Mapping) approach for database interactions.</li><li><strong>Spring Data JPA:</strong> Simplifies JPA by reducing boilerplate code and providing repository interfaces.</li><li><strong>Spring Data JDBC:</strong> A lightweight alternative to JPA for simple database operations.</li><li><strong>Using NoSQL Databases:</strong> Supports MongoDB, Redis, Cassandra, etc.</li><li><strong>Using External Database Services:</strong> Can connect to cloud-based databases like AWS RDS, Azure SQL, etc.</li></ul>",
              "codeSnippet": "// Example: Connecting to a Database using Spring Data JPA\n\n// 1. Add Dependency (For MySQL Example)\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <scope>runtime</scope>\n</dependency>\n\n// 2. Configure Database in application.properties\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\nspring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect\nspring.jpa.hibernate.ddl-auto=update\n\n// 3. Define Entity Class\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    private String email;\n    // Getters and Setters\n}\n\n// 4. Repository Interface\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {}\n\n// 5. Service and Controller\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    public List<User> getAllUsers() {\n        return userRepository.findAll();\n    }\n}\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n    @GetMapping\n    public ResponseEntity<List<User>> getUsers() {\n        return ResponseEntity.ok(userService.getAllUsers());\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What is the role of application.properties in database configuration?",
              "answer": "The `application.properties` file in Spring Boot is used to configure database connection settings such as URL, username, password, and Hibernate properties.",
              "explanation": "<div><strong>Role of application.properties in Database Configuration:</strong></div><ul><li><strong>Defines Connection Details:</strong> Specifies database URL, username, and password.</li><li><strong>Sets Driver and Dialect:</strong> Configures JDBC driver and JPA dialect for Hibernate.</li><li><strong>Manages Hibernate Behavior:</strong> Controls schema generation with `ddl-auto` settings.</li><li><strong>Optimizes Performance:</strong> Enables connection pooling and caching.</li></ul>",
              "codeSnippet": "// Example: MySQL Database Configuration in application.properties\nspring.datasource.url=jdbc:mysql://localhost:3306/mydb\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\n\n// Hibernate and JPA Properties\nspring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\n\n// Example: PostgreSQL Configuration\nspring.datasource.url=jdbc:postgresql://localhost:5432/mydb\nspring.datasource.username=postgres\nspring.datasource.password=admin\nspring.datasource.driver-class-name=org.postgresql.Driver\nspring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect"
            }
          },
          {
            "content": {
              "question": "How do you define an entity in Spring Data JPA?",
              "answer": "An entity in Spring Data JPA is defined using the `@Entity` annotation, which maps a Java class to a database table.",
              "explanation": "<div><strong>Steps to Define an Entity in Spring Data JPA:</strong></div><ul><li><strong>Use `@Entity`:</strong> Marks the class as a JPA entity.</li><li><strong>Define a Primary Key:</strong> Use `@Id` and `@GeneratedValue` for auto-incrementing IDs.</li><li><strong>Map Columns:</strong> Use `@Column` for column-specific properties.</li><li><strong>Use Relationships:</strong> Annotations like `@OneToMany`, `@ManyToOne` define entity relationships.</li></ul>",
              "codeSnippet": "// Example: Defining an Entity in Spring Data JPA\n@Entity\n@Table(name = \"users\")\npublic class User {\n    \n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @Column(nullable = false)\n    private String name;\n    \n    @Column(unique = true, nullable = false)\n    private String email;\n    \n    // Default Constructor\n    public User() {}\n    \n    // Getters and Setters\n    public Long getId() {\n        return id;\n    }\n    public void setId(Long id) {\n        this.id = id;\n    }\n    public String getName() {\n        return name;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n    public String getEmail() {\n        return email;\n    }\n    public void setEmail(String email) {\n        this.email = email;\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What is the purpose of the @Entity and @Table annotations?",
              "answer": "The `@Entity` annotation marks a class as a JPA entity, while the `@Table` annotation allows customization of the database table name and properties.",
              "explanation": "<div><strong>Purpose of @Entity and @Table Annotations:</strong></div><ul><li><strong>@Entity:</strong> Specifies that a class is mapped to a database table.</li><li><strong>@Table:</strong> Provides additional table-related settings like custom table name, schema, and unique constraints.</li></ul>",
              "codeSnippet": "// Example: Using @Entity and @Table in Spring Data JPA\n@Entity\n@Table(name = \"users\", schema = \"public\", uniqueConstraints = {@UniqueConstraint(columnNames = \"email\")})\npublic class User {\n    \n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @Column(nullable = false)\n    private String name;\n    \n    @Column(unique = true, nullable = false)\n    private String email;\n    \n    // Getters and Setters\n    public Long getId() {\n        return id;\n    }\n    public void setId(Long id) {\n        this.id = id;\n    }\n    public String getName() {\n        return name;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n    public String getEmail() {\n        return email;\n    }\n    public void setEmail(String email) {\n        this.email = email;\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What is the role of the @Id and @GeneratedValue annotations in JPA?",
              "answer": "The `@Id` annotation marks a field as the primary key, while `@GeneratedValue` specifies the generation strategy for primary key values.",
              "explanation": "<div><strong>Role of @Id and @GeneratedValue Annotations in JPA:</strong></div><ul><li><strong>@Id:</strong> Specifies the primary key of an entity.</li><li><strong>@GeneratedValue:</strong> Defines how the primary key value is generated.</li><li><strong>Generation Strategies:</strong><ul><li><strong>IDENTITY:</strong> Uses the database's auto-increment feature.</li><li><strong>SEQUENCE:</strong> Uses a database sequence generator.</li><li><strong>TABLE:</strong> Uses a separate table to generate primary key values.</li><li><strong>AUTO:</strong> Lets Hibernate decide the best strategy based on the database.</li></ul></li></ul>",
              "codeSnippet": "// Example: Using @Id and @GeneratedValue in an Entity\n@Entity\npublic class User {\n    \n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremented primary key\n    private Long id;\n    \n    @Column(nullable = false)\n    private String name;\n    \n    @Column(unique = true, nullable = false)\n    private String email;\n    \n    // Getters and Setters\n    public Long getId() {\n        return id;\n    }\n    public void setId(Long id) {\n        this.id = id;\n    }\n    public String getName() {\n        return name;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n    public String getEmail() {\n        return email;\n    }\n    public void setEmail(String email) {\n        this.email = email;\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What are Spring Boot repositories, and how do they work?",
              "answer": "Spring Boot repositories are interfaces that provide an abstraction layer for database operations, eliminating the need for boilerplate CRUD code.",
              "explanation": "<div><strong>How Spring Boot Repositories Work:</strong></div><ul><li><strong>Spring Data JPA:</strong> Provides built-in repository interfaces such as `JpaRepository`, `CrudRepository`, and `PagingAndSortingRepository`.</li><li><strong>Auto-Generated Methods:</strong> Spring Data JPA automatically implements CRUD methods based on method names.</li><li><strong>Custom Queries:</strong> Supports custom queries using JPQL and native SQL with `@Query`.</li><li><strong>Pagination and Sorting:</strong> Supports built-in pagination and sorting mechanisms.</li></ul>",
              "codeSnippet": "// Example: Defining a Spring Boot Repository\n\n// 1. Entity Class\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    private String email;\n    \n    // Getters and Setters\n}\n\n// 2. Repository Interface\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    // Custom Query Method\n    List<User> findByName(String name);\n}\n\n// 3. Service Layer Using Repository\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    public List<User> getAllUsers() {\n        return userRepository.findAll();\n    }\n    \n    public List<User> getUsersByName(String name) {\n        return userRepository.findByName(name);\n    }\n}\n\n// 4. Controller Using Service\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n    \n    @GetMapping\n    public ResponseEntity<List<User>> getUsers() {\n        return ResponseEntity.ok(userService.getAllUsers());\n    }\n    \n    @GetMapping(\"/name/{name}\")\n    public ResponseEntity<List<User>> getUsersByName(@PathVariable String name) {\n        return ResponseEntity.ok(userService.getUsersByName(name));\n    }\n}"
            }
          },
          {
            "comparision": {
              "question": "What is the difference between CrudRepository, JpaRepository, and PagingAndSortingRepository?",
              "compareHeading": ["CrudRepository", "JpaRepository", "PagingAndSortingRepository"],
              "comparision": [
                {
                  "CrudRepository": {
                    "Definition": "A Spring Data interface providing basic CRUD operations.",
                    "Purpose": "Used for simple CRUD functionality like save, findById, delete, and existsById.",
                    "Pagination & Sorting": "Not supported.",
                    "Additional Methods": "Limited to basic CRUD operations.",
                    "Example": "public interface UserRepository extends CrudRepository<User, Long> {}"
                  }
                },
                {
                  "JpaRepository": {
                    "Definition": "An extension of CrudRepository that provides JPA-specific features.",
                    "Purpose": "Used for advanced database operations with JPA, including batch processing and flush operations.",
                    "Pagination & Sorting": "Supports pagination and sorting.",
                    "Additional Methods": "Includes methods like findAll(Pageable pageable), flush(), and deleteInBatch().",
                    "Example": "public interface UserRepository extends JpaRepository<User, Long> {}"
                  }
                },
                {
                  "PagingAndSortingRepository": {
                    "Definition": "An interface that extends CrudRepository and adds methods for pagination and sorting.",
                    "Purpose": "Used when pagination and sorting are needed but without full JPA features.",
                    "Pagination & Sorting": "Supports pagination and sorting via Pageable and Sort parameters.",
                    "Additional Methods": "Includes findAll(Sort sort) and findAll(Pageable pageable).",
                    "Example": "public interface UserRepository extends PagingAndSortingRepository<User, Long> {}"
                  }
                }
              ],
              "image": ""
            }
          },
          
          {
            "content": {
              "question": "How do you write custom queries in Spring Data JPA using @Query?",
              "answer": "In Spring Data JPA, the `@Query` annotation allows defining custom JPQL or native SQL queries to retrieve data based on specific conditions.",
              "explanation": "<div><strong>Ways to Write Custom Queries Using @Query:</strong></div><ul><li><strong>JPQL Queries:</strong> Uses JPA Query Language, which is database-independent.</li><li><strong>Native Queries:</strong> Uses raw SQL for complex queries.</li><li><strong>Named Parameters:</strong> Uses `:paramName` to bind parameters in the query.</li><li><strong>Positional Parameters:</strong> Uses `?1, ?2` to bind parameters based on position.</li></ul>",
              "codeSnippet": "// Example: Writing Custom Queries in Spring Data JPA\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    \n    // JPQL Query\n    @Query(\"SELECT u FROM User u WHERE u.name = :name\")\n    List<User> findByName(@Param(\"name\") String name);\n    \n    // Native Query\n    @Query(value = \"SELECT * FROM users WHERE email = ?1\", nativeQuery = true)\n    User findByEmail(String email);\n    \n    // JPQL Query with Multiple Parameters\n    @Query(\"SELECT u FROM User u WHERE u.name = :name AND u.email = :email\")\n    List<User> findByNameAndEmail(@Param(\"name\") String name, @Param(\"email\") String email);\n}"
            }
          },
          {
            "content": {
              "question": "What is the purpose of the EntityManager in JPA?",
              "answer": "The `EntityManager` in JPA is responsible for managing the lifecycle of entities, performing database operations, and interacting with the persistence context.",
              "explanation": "<div><strong>Key Roles of EntityManager:</strong></div><ul><li><strong>Manages Persistence Context:</strong> Tracks entity changes and synchronizes them with the database.</li><li><strong>Performs CRUD Operations:</strong> Provides methods like `persist()`, `merge()`, `remove()`, and `find()`.</li><li><strong>Creates Queries:</strong> Allows executing JPQL and native queries.</li><li><strong>Transaction Management:</strong> Works within transactions to ensure consistency.</li></ul>",
              "codeSnippet": "// Example: Using EntityManager in a Spring Boot Repository\n@Repository\npublic class UserRepository {\n    \n    @PersistenceContext // Injects the EntityManager\n    private EntityManager entityManager;\n    \n    public void saveUser(User user) {\n        entityManager.persist(user); // Inserts user into the database\n    }\n    \n    public User getUserById(Long id) {\n        return entityManager.find(User.class, id); // Retrieves user by ID\n    }\n    \n    public void updateUser(User user) {\n        entityManager.merge(user); // Updates existing user\n    }\n    \n    public void deleteUser(User user) {\n        entityManager.remove(user); // Deletes user\n    }\n}"
            }
          },
          {
            "content": {
              "question": "How do you handle transactions in Spring Boot using @Transactional?",
              "answer": "The `@Transactional` annotation in Spring Boot ensures that a series of database operations are executed within a single transaction, maintaining data consistency.",
              "explanation": "<div><strong>Handling Transactions in Spring Boot:</strong></div><ul><li><strong>@Transactional at Method Level:</strong> Ensures that all operations within a method are committed or rolled back as a unit.</li><li><strong>Rollback on Exception:</strong> By default, Spring rolls back transactions on runtime exceptions (`RuntimeException` or `UncheckedException`).</li><li><strong>Propagation Levels:</strong> Controls how transactions interact (e.g., `REQUIRED`, `REQUIRES_NEW`).</li><li><strong>Read-Only Transactions:</strong> Improves performance for read operations by preventing unnecessary locks.</li></ul>",
              "codeSnippet": "// Example: Using @Transactional in a Spring Boot Service\n@Service\npublic class UserService {\n    \n    @Autowired\n    private UserRepository userRepository;\n    \n    // Transactional method for saving a user\n    @Transactional\n    public void createUser(User user) {\n        userRepository.save(user);\n    }\n    \n    // Transactional method with rollback on exception\n    @Transactional(rollbackFor = Exception.class)\n    public void updateUser(Long id, String newName) {\n        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException(\"User not found\"));\n        user.setName(newName);\n        userRepository.save(user);\n    }\n    \n    // Read-Only Transaction for fetching data\n    @Transactional(readOnly = true)\n    public List<User> getAllUsers() {\n        return userRepository.findAll();\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What is Lazy Loading and Eager Loading in Hibernate?",
              "answer": "Lazy Loading delays fetching related entities until they are accessed, while Eager Loading retrieves all related entities immediately with the main entity.",
              "explanation": "<div><strong>Difference Between Lazy Loading and Eager Loading:</strong></div><ul><li><strong>Lazy Loading (Default in Hibernate):</strong> Fetches related data only when needed, improving performance.</li><li><strong>Eager Loading:</strong> Loads all related entities immediately, reducing additional queries but increasing initial load time.</li><li><strong>Configuration:</strong> Uses `FetchType.LAZY` or `FetchType.EAGER` in `@OneToMany`, `@ManyToOne`, `@OneToOne`, and `@ManyToMany` relationships.</li></ul>",
              "codeSnippet": "// Example: Lazy Loading vs Eager Loading in Hibernate\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    \n    // Lazy Loading (Default)\n    @OneToMany(mappedBy = \"user\", fetch = FetchType.LAZY)\n    private List<Order> orders;\n    \n    // Eager Loading\n    @OneToOne(fetch = FetchType.EAGER)\n    @JoinColumn(name = \"profile_id\")\n    private UserProfile profile;\n    \n    // Getters and Setters\n}\n\n@Entity\npublic class Order {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String orderNumber;\n    \n    @ManyToOne\n    @JoinColumn(name = \"user_id\")\n    private User user;\n    \n    // Getters and Setters\n}"
            }
          },
          {
            "content": {
              "question": "How can you handle the N+1 query problem in Spring Data JPA?",
              "answer": "The N+1 query problem in Spring Data JPA occurs when fetching related entities lazily, leading to multiple queries. It can be resolved using JOIN FETCH, Entity Graphs, or Batch Fetching.",
              "explanation": "<div><strong>Ways to Handle the N+1 Query Problem:</strong></div><ul><li><strong>JOIN FETCH:</strong> Uses JPQL to fetch related entities in a single query.</li><li><strong>Entity Graphs:</strong> Defines fetch strategies dynamically without modifying queries.</li><li><strong>Batch Fetching:</strong> Groups queries into batches using Hibernate properties.</li><li><strong>DTO Projection:</strong> Fetches only required fields, avoiding unnecessary entity loading.</li></ul>",
              "codeSnippet": "// 1. Using JOIN FETCH to Fetch Related Entities\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    @Query(\"SELECT u FROM User u JOIN FETCH u.orders WHERE u.id = :id\")\n    User findUserWithOrders(@Param(\"id\") Long id);\n}\n\n// 2. Using Entity Graph for Fetching Data\n@Entity\n@NamedEntityGraph(name = \"User.orders\", attributeNodes = @NamedAttributeNode(\"orders\"))\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    \n    @OneToMany(mappedBy = \"user\", fetch = FetchType.LAZY)\n    private List<Order> orders;\n}\n\n// Service Layer Using Entity Graph\n@Service\npublic class UserService {\n    @PersistenceContext\n    private EntityManager entityManager;\n    \n    public User getUserWithOrders(Long id) {\n        EntityGraph<?> entityGraph = entityManager.getEntityGraph(\"User.orders\");\n        return entityManager.find(User.class, id, Collections.singletonMap(\"javax.persistence.fetchgraph\", entityGraph));\n    }\n}\n\n// 3. Batch Fetching Configuration in application.properties\nspring.jpa.properties.hibernate.default_batch_fetch_size=10"
            }
          },
          {
            "comparision": {
              "question": "What is the difference between native queries and JPQL in Spring Boot?",
              "compareHeading": ["Native Queries", "JPQL (Java Persistence Query Language)"],
              "comparision": [
                {
                  "Native Queries": {
                    "Definition": "SQL queries executed directly against the database using @Query annotation with nativeQuery=true.",
                    "Syntax": "Uses database-specific SQL syntax.",
                    "Database Independence": "Tied to a specific database, making migration more difficult.",
                    "Performance": "Generally faster for complex queries as it leverages database-specific optimizations.",
                    "Use Case": "Used when custom SQL operations, joins, or stored procedures are required.",
                    "Example": "@Query(value = \"SELECT * FROM users WHERE email = ?1\", nativeQuery = true)\nUser findByEmail(String email);"
                  }
                },
                {
                  "JPQL (Java Persistence Query Language)": {
                    "Definition": "An object-oriented query language that works with JPA entities instead of tables.",
                    "Syntax": "Uses entity names and field names instead of table and column names.",
                    "Database Independence": "Database-agnostic, making migration easier.",
                    "Performance": "Optimized by Hibernate but may be slower than native queries for complex operations.",
                    "Use Case": "Used when working with entity objects in a database-independent manner.",
                    "Example": "@Query(\"SELECT u FROM User u WHERE u.email = ?1\")\nUser findByEmail(String email);"
                  }
                }
              ],
              "image": ""
            }
          },
          {
            "content": {
              "question": "How do you implement batch processing in Spring Boot with JDBC or JPA?",
              "answer": "Batch processing in Spring Boot can be implemented using JDBC batch updates or JPA batch inserts/updates to improve performance by reducing the number of database interactions.",
              "explanation": "<div><strong>Ways to Implement Batch Processing:</strong></div><ul><li><strong>JDBC Batch Processing:</strong> Uses `JdbcTemplate` to execute multiple SQL statements efficiently.</li><li><strong>JPA Batch Processing:</strong> Uses `EntityManager` or `saveAll()` with batch size tuning for efficient inserts/updates.</li><li><strong>Spring Batch:</strong> A framework for large-scale batch jobs with chunk processing and job scheduling.</li></ul>",
              "codeSnippet": "// 1. JDBC Batch Processing with JdbcTemplate\n@Service\npublic class UserService {\n    @Autowired\n    private JdbcTemplate jdbcTemplate;\n    \n    public void batchInsertUsers(List<User> users) {\n        String sql = \"INSERT INTO users (name, email) VALUES (?, ?)\";\n        jdbcTemplate.batchUpdate(sql, new BatchPreparedStatementSetter() {\n            @Override\n            public void setValues(PreparedStatement ps, int i) throws SQLException {\n                ps.setString(1, users.get(i).getName());\n                ps.setString(2, users.get(i).getEmail());\n            }\n            @Override\n            public int getBatchSize() {\n                return users.size();\n            }\n        });\n    }\n}\n\n// 2. JPA Batch Processing with EntityManager\n@Service\npublic class UserService {\n    @PersistenceContext\n    private EntityManager entityManager;\n    \n    @Transactional\n    public void batchInsertUsers(List<User> users) {\n        int batchSize = 50;\n        for (int i = 0; i < users.size(); i++) {\n            entityManager.persist(users.get(i));\n            if (i % batchSize == 0) {\n                entityManager.flush();\n                entityManager.clear();\n            }\n        }\n    }\n}\n\n// 3. Spring Batch for Large-Scale Processing\n@Configuration\n@EnableBatchProcessing\npublic class BatchConfig {\n    @Bean\n    public Step step1(StepBuilderFactory stepBuilderFactory, ItemReader<User> reader, ItemProcessor<User, User> processor, ItemWriter<User> writer) {\n        return stepBuilderFactory.get(\"step1\")\n                .<User, User>chunk(10)\n                .reader(reader)\n                .processor(processor)\n                .writer(writer)\n                .build();\n    }\n}"
            }
          },
          {
            "content": {
              "question": "What are optimistic and pessimistic locking in Hibernate?",
              "answer": "Optimistic locking prevents conflicts by versioning data, while pessimistic locking locks database records to avoid concurrent modifications.",
              "explanation": "<div><strong>Difference Between Optimistic and Pessimistic Locking:</strong></div><ul><li><strong>Optimistic Locking:</strong> Uses a version number or timestamp to detect conflicts when updating records, rolling back if another transaction modifies the data.</li><li><strong>Pessimistic Locking:</strong> Locks a record when it's read to prevent other transactions from modifying it until the lock is released.</li><li><strong>Use Case:</strong> Optimistic locking is suitable when conflicts are rare, while pessimistic locking is used in high-contention environments.</li></ul>",
              "codeSnippet": "// 1. Optimistic Locking using @Version\n@Entity\npublic class User {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n    \n    @Version // Enables optimistic locking\n    private int version;\n}\n\n// 2. Pessimistic Locking using LockModeType\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    @Lock(LockModeType.PESSIMISTIC_WRITE)\n    @Query(\"SELECT u FROM User u WHERE u.id = :id\")\n    User findUserForUpdate(@Param(\"id\") Long id);\n}\n\n// 3. Using Pessimistic Locking in Service Layer\n@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n    \n    @Transactional\n    public void updateUser(Long id, String newName) {\n        User user = userRepository.findUserForUpdate(id); // Locking the record\n        user.setName(newName);\n        userRepository.save(user);\n    }\n}"
            }
          }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
    ]
}
export default springbootDataAccessQuestions;