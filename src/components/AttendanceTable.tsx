import React, { useState } from 'react';
import { Download, Search } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

interface AttendanceRecord {
    id: string;
    attendance_date: string;
    status: string;
    check_in: string | null;
    check_out: string | null;
    deployments: {
        role: string;
        candidates: {
            full_name: string;
        };
    };
}

interface Props {
    attendance: AttendanceRecord[];
}

export default function AttendanceTable({ attendance }: Props) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAttendance = attendance.filter(record => 
        record.deployments.candidates.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.deployments.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const exportToCSV = () => {
        const headers = ['Staff Member', 'Role', 'Status', 'Check In', 'Check Out', 'Date'];
        const rows = filteredAttendance.map(record => [
            record.deployments.candidates.full_name,
            record.deployments.role,
            record.status,
            record.check_in ? new Date(record.check_in).toLocaleTimeString('en-IN') : '-',
            record.check_out ? new Date(record.check_out).toLocaleTimeString('en-IN') : '-',
            record.attendance_date
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `attendance_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted z-10" size={18} />
                    <Input 
                        placeholder="Filter by name or role..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Button 
                    onClick={exportToCSV}
                    variant="outline"
                    className="border-success text-success hover:bg-success/10"
                    leftIcon={Download}
                >
                    Export CSV
                </Button>
            </div>

            <Card variant="standard" animate={false} className="p-0 border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-border bg-surface">
                                <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Staff Member</th>
                                <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Role</th>
                                <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Status</th>
                                <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Check In</th>
                                <th className="px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted">Check Out</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredAttendance.length > 0 ? filteredAttendance.map((record) => (
                                <tr key={record.id} className="hover:bg-primary-600/5 transition-colors group">
                                    <td className="px-6 h-[56px]">
                                        <span className="font-medium text-text-primary group-hover:text-primary-600 transition-colors">
                                            {record.deployments.candidates.full_name}
                                        </span>
                                    </td>
                                    <td className="px-6 h-[56px] text-text-secondary">{record.deployments.role}</td>
                                    <td className="px-6 h-[56px]">
                                        <Badge variant={
                                            record.status === 'present' ? 'success' : 
                                            record.status === 'absent' ? 'danger' : 'warning'
                                        }>
                                            {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                                        </Badge>
                                    </td>
                                    <td className="px-6 h-[56px] text-text-secondary">{record.check_in ? new Date(record.check_in).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                                    <td className="px-6 h-[56px] text-text-secondary">{record.check_out ? new Date(record.check_out).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-text-muted">
                                        No attendance records found for today.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
