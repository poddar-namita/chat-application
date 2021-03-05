<%@ page import="java.sql.*" %>

<%
    String name = request.getParameter("reg-name");
    String email = request.getParameter("reg-emailId");
    String password = request.getParameter("reg-password");

    try{

        //database connection
        Class.forName("com.mysql.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/chat_application","root","");

        //SQL insert query
        PreparedStatement pst=con.prepareStatement("insert into user_list(user_name,user_email,user_password) values(?,?,?);");;
        
        pst.setString(1,name);
        pst.setString(2,email);
        pst.setString(3,password);

        //Execute query
        int result = pst.executeUpdate();
        if(result>0){
            response.sendRedirect("index.html");
        }
        else{
            out.println("Registration failed");
        }
    }
    catch(Exception e){
        out.println(e);
    }
    
%>