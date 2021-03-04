<%@ page import="java.sql.*" %>

<%
    String email = request.getParameter("emailId");
    String password = request.getParameter("password");

    try{
        Class.forName("com.mysql.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/chat_application","root","");
        PreparedStatement pst=con.prepareStatement("select * from user_list where user_name = ? && user_password = ?"); 
        pst.setString(1, email);
        pst.setString(2, password);
        ResultSet rs = pst.executeQuery();
        if(rs.next()){
            response.sendRedirect("chat-room.html");
        }

        
    }
    catch(Exception e){
        out.println(e);
    }
    
%>