import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';
import Icon from '../../../components/icons/Icon';
import Card from '../../../components/layout/Card';
import { Task } from '../../../types/models';

interface TodaysTasksProps {
  tasks: Task[];
  onViewAll: () => void;
}

const TodaysTasks: React.FC<TodaysTasksProps> = ({ tasks, onViewAll }) => {
  const { colors, spacing } = useTheme();

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <Card style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.textSecondary }]}>TODAY'S TASKS</Text>
        <Text style={[styles.count, { color: colors.primary }]}>
          {completedTasks}/{tasks.length} completed
        </Text>
      </View>

      <View style={styles.taskList}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskItem}>
            <View
              style={[
                styles.checkbox,
                {
                  borderColor: colors.primary,
                  backgroundColor: task.completed ? colors.primary : 'transparent'
                }
              ]}
            >
              {task.completed && (
                <Icon name="check" size={12} color={colors.white} />
              )}
            </View>
            <Text
              style={[
                styles.taskText,
                {
                  textDecorationLine: task.completed ? 'line-through' : 'none',
                  color: task.completed ? colors.textTertiary : colors.text
                }
              ]}
            >
              {task.title}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={onViewAll}>
          <Text style={[styles.viewAll, { color: colors.primary }]}>
            View all tasks →
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  count: {
    fontSize: 12,
    fontWeight: '500',
  },
  taskList: {
    marginBottom: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 14,
  },
  footer: {
    marginTop: 4,
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TodaysTasks;