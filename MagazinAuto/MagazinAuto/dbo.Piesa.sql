CREATE TABLE [dbo].[Piesa]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Nume] NCHAR(20) NULL, 
    [Tip] NCHAR(10) NULL, 
    [Pret] MONEY NULL, 
    [Bag] BIT NULL
)
