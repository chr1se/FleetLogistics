# FleetLogistics
FLapi - The ASP.NET MVC API solution & project directory

FLapp - The Angular src folder directory

[VehicleDB].[dbo].[Vehicles].sql - SQL mockdata



## 1. Frontend (FLapp): Angular 
Ensure you have node.js then run the following commands in your terminal:

```
npm install -g @angular/cli

ng new FLapp
```
In your FLapp directory replace the `src` folder with the one above in this repository

In your terminal 

```
cd FLapp
ng serve --o
```
Browser will open to ```http://localhost:4200/```

The link `http://localhost:4200/vehicles` is the important but will not work till you have the Backend setup.



## 2. Backend (FLapi): ASP
The whole directory including the `FLapi.sln` is included. Clicking on it will startup Visual Studio

Go to MS-SQL Server Management Studio to find out your MS-SQL Server name.

Change the `Server=<mssql-servername>` name in the connection string of the `appsettings.json` to your ms-sql server name

```
  "ConnectionStrings": {
    "DevConnection": "Server=CHRIS288F;Database=VehicleDB;Trusted_Connection=True;MultipleActiveResultSets=True;"
  }
```

Open Packet Manger Console in Visual Studio and run the code:

```
Update-Database

```
Go to MS-SQL Server Management Studio and run the `[VehicleDB].[dbo].[Vehicles].sql` SQL file above to poulate your database with mockdata.

Build and Run project and then visit `http://localhost:4200/vehicles`
