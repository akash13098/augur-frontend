import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const mockDistributors = [
    { name: "Distributor A", lastMonth: 1200, forecasted: 1300, ytdAverage: 1250 },
    { name: "Distributor B", lastMonth: 900, forecasted: 1000, ytdAverage: 950 },
    { name: "Distributor C", lastMonth: 1500, forecasted: 1400, ytdAverage: 1450 },
];

function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Augur Dashboard</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Distributor Name</TableCell>
                            <TableCell align="right">Last Month's Shipments</TableCell>
                            <TableCell align="right">Forecasted Shipments</TableCell>
                            <TableCell align="right">YTD Average</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockDistributors.map((distributor) => (
                            <TableRow key={distributor.name}>
                                <TableCell>{distributor.name}</TableCell>
                                <TableCell align="right">{distributor.lastMonth}</TableCell>
                                <TableCell align="right">{distributor.forecasted}</TableCell>
                                <TableCell align="right">{distributor.ytdAverage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default App;
