package com.se14.repository.db_impl;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static final String URL = "jdbc:mysql://172.30.1.54:3306/se14";
    private static final String USER = "root";
    private static final String PASSWORD = "0524";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}